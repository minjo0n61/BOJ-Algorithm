const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);

let n = input[2] - input[0];
let i = input[0] - input[1];

console.log(1 + Math.ceil(n / i))