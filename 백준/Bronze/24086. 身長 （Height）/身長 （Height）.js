const input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(Number);

console.log(input[1] - input[0]);