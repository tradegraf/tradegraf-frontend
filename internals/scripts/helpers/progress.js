const readline = require('readline');

/**
 * Adds an animated progress indicator
 *
 * @param  {string} message      The message to write next to the indicator
 * @param  {number} [amountOfDots=3] The amount of dots you want to animate
 */
function animateProgress(message, amountOfDots = 3) {
  let index = 0;
  return setInterval(() => {
    readline.cursorTo(process.stdout, 0);
    index = (index + 1) % (amountOfDots + 1);
    // eslint-disable-next-line unicorn/no-new-array
    const dots = new Array(index + 1).join('.');
    process.stdout.write(message + dots);
  }, 500);
}

module.exports = animateProgress;
