const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
const testCase = input.shift();
let answer = [];
for (let i = 0; i < testCase; i++) {
    if (input[i] !== 0) {
        answer.push(input[i]);
    }
    else {
        answer.pop();
    }
}
let sum = answer.reduce((pv, cv) => pv + cv, 0);
console.log(sum);