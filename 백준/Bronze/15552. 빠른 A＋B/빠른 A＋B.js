const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const testcase = Number(input[0]);
let sum = 0;
let answer = '';

for (let i = 1; i <= testcase; i++) {
    let line = input[i].split(" ");
    sum = Number(line[0]) + Number(line[1]);
    answer += sum + "\n";
}
console.log(answer);