const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let testcase = input.shift();
let num = input[0];
let sum = new Array(testcase + 1).fill(0);

for (let i = 0; i < testcase; i++) {
    sum[i] = num[i];
    if (sum[i] < sum[i - 1] + num[i]) {
        sum[i] = sum[i - 1] + num[i];
    }
}
console.log(Math.max(...sum));