const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(el=>+el);
input.sort((a,b)=>a-b);
console.log(input[1]);