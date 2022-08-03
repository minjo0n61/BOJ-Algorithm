const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let testcase = Number(input[0]);
let score = input[1].split(" ").map(Number);
let maxscore = Math.max(...score);
let sum = 0;

for (let i = 0; i < testcase; i++) {
    sum += score[i] / maxscore * 100;
}
console.log(sum / testcase);