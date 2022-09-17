const input = require('fs').readFileSync("/dev/stdin").toString().split(" ").map(Number);

console.log(parseInt(Math.max((input[0] * input[1]) / input[2], (input[0] / input[1]) * input[2])));