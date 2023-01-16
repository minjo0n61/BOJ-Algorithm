const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
let testcase = input.shift();
let answer = [];
input.sort((a, b) => a - b);
let num = input[1] - input[0];
for (let i = 2; i < testcase; i++) {
    num = getGcd(num, input[i] - input[i - 1]);
}
for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
        answer.push(i);
    }
}
console.log(answer.join(" "));

function getGcd(a, b) {
    if (b === 0) {
        return a;
    }
    return getGcd(b, a % b);
}