const input = require('fs').readFileSync('/dev/stdin').toString().split("");
let answer = "";
for (let i = input.length - 1; i >= 0; i--) {
    answer += input[i];
}
console.log(answer.trim());