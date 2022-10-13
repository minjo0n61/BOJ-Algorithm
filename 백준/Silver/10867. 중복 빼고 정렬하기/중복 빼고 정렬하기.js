const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const N = +input[0];
const num = input[1].split(" ").map(Number);
const answer = [...new Set(num)].sort((a,b)=>a-b);

console.log(answer.join(" "));