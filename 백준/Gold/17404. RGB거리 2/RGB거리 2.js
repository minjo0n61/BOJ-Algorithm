const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let N = input.shift()[0];
let result = [];

for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
        let dp = Array(N + 1).fill().map(el => Array(3).fill(0))
        dp[1] = [1000, 1000, 1000];
        dp[1][k] = input[0][k];
        for (let i = 2; i <= N; i++) {
            dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + input[i - 1][0];
            dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + input[i - 1][1];
            dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + input[i - 1][2];
            if (i === N) {
                dp[N][k] = 999999;
            }
        }
        // console.log(dp)
        result.push(Math.min(...dp[N]))
    }
}

console.log(Math.min(...result));