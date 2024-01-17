const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
const [N, M] = input.shift();
let miro = input;
let dp = new Array(N + 1).fill().map(el => new Array(M + 1).fill(0));

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + miro[i - 1][j - 1];
    }
}
//console.log(dp);
//console.log(miro);
console.log(dp[N][M]);