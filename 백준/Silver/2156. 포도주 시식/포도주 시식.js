const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
let testcase = +input.shift();
let dp = new Array(testcase).fill(0);
dp[1] = input[0];
dp[2] = input[0] + input[1];

for (let i = 3; i <= testcase; i++) {
    dp[i] = Math.max(input[i - 1] + input[i - 2] + dp[i - 3], input[i - 1] + dp[i - 2], dp[i - 1]);
}

console.log(dp[testcase]);