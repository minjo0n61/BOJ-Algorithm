const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
let testcase = input.shift();
let sum = 0;
for (let i = 0; i < testcase; i++) {
    sum += input[i];
}
console.log(sum);