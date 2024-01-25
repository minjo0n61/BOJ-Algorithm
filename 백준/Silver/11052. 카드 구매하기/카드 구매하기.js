const [N, P] = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let dp = Array(N).fill(0);
let num = [];
P.unshift(0);

//그리디 + dp
dp[0] = 0;
dp[1] = P[1];
dp[2] = Math.max(P[1] * 2, P[2]);
dp[3] = Math.max(P[1] * 3, dp[2] + P[2], P[3]);

for (let i = 3; i <= N[0]; i++) {
    for (let j = i - 1; j >= 1; j--) {
        num.push(dp[i - j] + dp[j]);
    }
    dp[i] = Math.max(P[1] * i, P[i], ...num);
}
console.log(dp[N]);