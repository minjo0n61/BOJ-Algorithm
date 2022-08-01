const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let testCase = BigInt(input[0]).toString();
let arr = input[1].split(" ").map(Number);
let answer = '';

answer += Math.min(...arr) + " ";
answer += Math.max(...arr);

console.log(answer);
