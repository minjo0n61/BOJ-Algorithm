const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt', 'utf8').trim().split('\n');

const M = parseInt(input[0]);
const belts = input.slice(1).map(line => line.split(' ').map(Number));

let currentDirection = 0;
let currentRPM = 1;

for (let i = 0; i < M; i++) {
  const [a, b, s] = belts[i];
  currentRPM = (currentRPM * b) / a;
  if (s === 1) {
    currentDirection = 1 - currentDirection;
  }
}

console.log(currentDirection, currentRPM);