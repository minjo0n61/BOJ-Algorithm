const input = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
let dp = new Array(input + 1).fill().map(el => new Array(10).fill(0));
dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
dp[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1];
for (let i = 3; i <= input; i++) {
    for (let j = 0; j < 10; j++) {
        if (j === 0) {
            dp[i][j] = dp[i - 1][j + 1] % 1000000000;
        } else if (j === 9) {
            dp[i][j] = dp[i - 1][j - 1] % 1000000000;
        } else {
            dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
        }
    }
}
console.log(dp[input].reduce((pv, cv) => pv + cv, 0) % 1000000000);