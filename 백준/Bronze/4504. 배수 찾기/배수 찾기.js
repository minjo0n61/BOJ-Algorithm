const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
let num = input.shift();
let answer = "";

for (let i = 0; i < input.length - 1; i++) {
    if (input[i] % num === 0) {
        answer += `${input[i]} is a multiple of ${num}.\n`
    } else {
        answer += `${input[i]} is NOT a multiple of ${num}.\n`
    }
}
console.log(answer.trim());