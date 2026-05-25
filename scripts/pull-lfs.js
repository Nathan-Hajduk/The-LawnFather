const { execSync } = require('child_process');

try {
  execSync('git lfs pull', { stdio: 'inherit' });
} catch (error) {
  console.warn('Git LFS pull skipped or failed. Continuing with the local working tree.');
}