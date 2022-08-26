const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

console.log(input[2] - input[1] <= 0 ? -1 : Math.trunc(input[0] / (input[2] - input[1]) + 1));