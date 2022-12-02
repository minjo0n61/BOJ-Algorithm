const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
let answer = '';
let sum = input.reduce((pv, cv) => pv + cv, 0);
answer += Math.floor(sum / 60) + "\n";
answer += sum % 60;
console.log(answer);