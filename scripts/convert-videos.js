const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const ffmpegPath = require('ffmpeg-static');

const mediaDir = path.join(process.cwd(), 'public', 'media');
if (!fs.existsSync(mediaDir)) {
  console.error('Media directory not found:', mediaDir);
  process.exit(1);
}

const files = fs.readdirSync(mediaDir).filter((f) => f.toLowerCase().endsWith('.mov'));
if (files.length === 0) {
  console.log('No .MOV files found in', mediaDir);
  process.exit(0);
}

console.log(`Found ${files.length} .MOV file(s). Using ffmpeg at: ${ffmpegPath}`);
let converted = 0;
for (const file of files) {
  const input = path.join(mediaDir, file);
  const output = path.join(mediaDir, file.replace(/\.mov$/i, '.mp4'));
  console.log('Converting', file, '→', path.basename(output));
  const args = [
    '-y',
    '-i', input,
    '-c:v', 'libx264',
    '-preset', 'medium',
    '-crf', '20',
    '-c:a', 'aac',
    '-b:a', '192k',
    '-movflags', '+faststart',
    output,
  ];
  const r = spawnSync(ffmpegPath, args, { stdio: 'inherit' });
  if (r.status !== 0) {
    console.error('ffmpeg failed for', file, 'exit code', r.status);
    process.exit(1);
  }
  converted++;
}
console.log(`Conversion complete — ${converted} file(s) converted.`);
