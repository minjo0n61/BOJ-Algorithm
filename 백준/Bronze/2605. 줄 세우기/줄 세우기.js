const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0], 10);
const picks = input[1].split(' ').map(Number);

const finalOrder = [];

for (let i = 0; i < n; i++) {
  finalOrder.splice(finalOrder.length - picks[i], 0, i + 1);
}

console.log(finalOrder.join(' '));
