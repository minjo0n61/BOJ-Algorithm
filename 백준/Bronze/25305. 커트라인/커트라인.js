const input = require('fs').readFileSync("/dev/stdin").toString().split("\n");
const line = input[0].split(" ").map(Number);
const cutline = line[1];

const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => b - a);
console.log(arr[cutline - 1])