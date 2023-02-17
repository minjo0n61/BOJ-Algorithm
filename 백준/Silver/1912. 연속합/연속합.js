const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(el => +el));
let testcase = input.shift();
let mynum = input[0];
let dp = [];

for (let i = 0; i < testcase; i++) {
    dp[i] = mynum[i];
    if (dp[i] < dp[i - 1] + mynum[i]) {
        dp[i] = dp[i - 1] + mynum[i];
    }
}
console.log(Math.max(...dp));