const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const nameLength = parseInt(input[0]);
const name = input[1];

let score = 0;

for (let i = 0; i < nameLength; i++) {
  score += name.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
}

console.log(score);
