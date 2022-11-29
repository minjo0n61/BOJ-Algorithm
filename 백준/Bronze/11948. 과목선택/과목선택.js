const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
let science = input.slice(0, 4);
let history = input.slice(4, 6)
science.sort((a, b) => a - b).shift();
history.sort((a, b) => a - b).shift();
let sum = science.reduce((pv, cv) => pv + cv, 0) + history[0];
console.log(sum);