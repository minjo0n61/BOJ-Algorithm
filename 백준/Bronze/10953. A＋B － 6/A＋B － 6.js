const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const testcase = Number(input[0]);
let answer = [];

for (let i = 1; i <= testcase; i++) {
    let line = input[i].split(',').map(Number);
    answer += Number(line[0] + line[1]) + "\n";
}
console.log(answer.trim());