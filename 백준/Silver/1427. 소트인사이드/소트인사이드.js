const input = require('fs').readFileSync('/dev/stdin').toString().split("");
let answer = "";
input.sort((a, b) => b - a);
for (let i = 0; i < input.length; i++) {
    answer += input[i];
}
console.log(answer);