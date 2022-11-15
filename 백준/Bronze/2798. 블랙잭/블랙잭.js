const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
const testcase = +input[0].shift();
const hap = +input.shift();
let sum = 0;
let maxSum = 0;

for (let i = 0; i < testcase - 2; i++) {
    for (let j = i + 1; j < testcase - 1; j++) {
        for (let k = j + 1; k < testcase; k++) {
            sum = input[0][i] + input[0][j] + input[0][k];
            if (sum <= hap && sum > maxSum) {
                maxSum = sum;
            }
        }
    }
}
console.log(maxSum);