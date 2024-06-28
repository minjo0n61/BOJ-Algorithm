const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [A, B] = input[0].split(' ').map(Number);
const N = +input[1];
const favorites = input.slice(2, 2 + N).map(Number);

let minButtonPresses = Math.abs(B - A);

for (let i = 0; i < N; i++) {
  const favorite = favorites[i];
  const presses = 1 + Math.abs(B - favorite);
  if (presses < minButtonPresses) {
    minButtonPresses = presses;
  }
}

console.log(minButtonPresses);
