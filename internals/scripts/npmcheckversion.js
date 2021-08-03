const { exec } = require('child_process');

exec('npm -v', (error, stdout) => {
  if (error) throw error;
  if (Number.parseFloat(stdout) < 5) {
    // NOTE: This can happen if you have a dependency which lists an old version of npm in its own dependencies.
    throw new Error(`[ERROR] You need npm version @>=5 but you have ${stdout}`);
  }
});
