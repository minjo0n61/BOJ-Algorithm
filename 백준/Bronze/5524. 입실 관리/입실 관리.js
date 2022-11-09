const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
const testCase = +input.shift();
let answer = '';
for (let i = 0; i < testCase; i++) {
    answer += input[i].toLowerCase() + "\n";
}
console.log(answer.trim());