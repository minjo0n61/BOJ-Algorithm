const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

let count = 0;

for (let a = 1; a * a <= N; a++) {
  if (N % a === 0) {
    const b = N / a;
    count++;
    if (a !== b) {
      count++;
    }
  }
}

console.log(count);
