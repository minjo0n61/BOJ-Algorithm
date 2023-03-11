const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const N = input[0];
let sum = 0;

for (let i = 1; i <= N; i++) {
  i === N ? (sum += input[i]) : (sum += input[i] - 1);
}

console.log(sum);