const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().split("-");
let answer = [];
for (let i = 0; i < input.length; i++) {
    answer.push(input[i][0]);
}
console.log(answer.join(""));