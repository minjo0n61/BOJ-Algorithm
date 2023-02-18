const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let testcase = +input.shift();
let memo = new Array(testcase + 1).fill().map(el => new Array(3).fill(0));

memo[1] = input[0];
for (let i = 2; i <= testcase; i++) {
    memo[i][0] = Math.min(memo[i - 1][1], memo[i - 1][2]) + input[i - 1][0];
    memo[i][1] = Math.min(memo[i - 1][0], memo[i - 1][2]) + input[i - 1][1];
    memo[i][2] = Math.min(memo[i - 1][0], memo[i - 1][1]) + input[i - 1][2];
}
console.log(Math.min(...memo[testcase]));