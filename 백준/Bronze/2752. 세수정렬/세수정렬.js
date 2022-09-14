const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);

input.sort((a, b) => a - b);
let answer = "";
for (let i = 0; i < input.length; i++) {
    answer += input[i] + " ";
}
console.log(answer);