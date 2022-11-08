const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const a = +input.shift();
const groupNum = new Set(input.shift().split(" "));
const b = +input.shift();
const compareNum = input.shift().split(" ");
const answer = compareNum.map(el => groupNum.has(el) ? 1 : 0);
console.log(answer.join("\n"));