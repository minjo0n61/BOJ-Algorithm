const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
let sum = 0;

sum = input.reduce((a, b) => (a + b), 0);
input.sort((a, b) => a - b);
console.log(parseInt(sum / 5) + "\n" + input[2]);