const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const testCase = Number(input[0]);
let answer = '';

for (let i = 1; i <= testCase; i++) {
    let sum = 0;
    sum = input[i].split(" ").map(Number);
    answer += `Case #${i}: ${sum[0] + sum[1]}\n`
}
console.log(answer);