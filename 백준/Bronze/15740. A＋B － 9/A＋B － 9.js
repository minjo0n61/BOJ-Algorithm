const input = require('fs').readFileSync('/dev/stdin').toString().split(" ");
let answer = BigInt(input[0]) + BigInt(input[1]);

console.log(answer.toString().trim("n"));