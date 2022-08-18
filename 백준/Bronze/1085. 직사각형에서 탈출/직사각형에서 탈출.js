const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
let arr = [];

arr.push(input[0], input[1], input[2] - input[0], input[3] - input[1]);
arr.sort((a, b) => b - a);
console.log(arr.pop());