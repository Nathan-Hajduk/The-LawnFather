const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const ffmpegPath = require('ffmpeg-static');

if (!ffmpegPath) {
  console.error('ffmpeg-static is not available.');
  process.exit(1);
}

const mediaDir = path.join(process.cwd(), 'public', 'media');
const filesToReencode = ['IMG_1057.mp4', 'MainMulchingVideo.mp4'];

for (const file of filesToReencode) {
  const input = path.join(mediaDir, file);
  if (!fs.existsSync(input)) {
    console.warn('Skipping missing file:', file);
    continue;
  }

  const tempOutput = path.join(mediaDir, `${path.basename(file, '.mp4')}.compressed.mp4`);
  console.log(`Re-encoding ${file} -> ${path.basename(tempOutput)}`);

  const args = [
    '-y',
    '-i', input,
    '-vf', "scale='min(960,iw)':-2",
    '-c:v', 'libx264',
    '-preset', 'slow',
    '-crf', '30',
    '-c:a', 'aac',
    '-b:a', '96k',
    '-movflags', '+faststart',
    tempOutput,
  ];

  const result = spawnSync(ffmpegPath, args, { stdio: 'inherit' });
  if (result.status !== 0) {
    console.error(`ffmpeg failed for ${file} with exit code ${result.status}`);
    process.exit(result.status ?? 1);
  }

  fs.renameSync(tempOutput, input);
  const sizeMb = (fs.statSync(input).size / (1024 * 1024)).toFixed(1);
  console.log(`Finished ${file} (${sizeMb} MB)`);
}