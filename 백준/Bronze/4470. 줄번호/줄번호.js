const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
let testCase = +input.shift();
let answer = '';
for (let i = 0; i < testCase; i++) {
    answer += `${i + 1}. ${input[i]}` + "\n"
}
console.log(answer.trim());