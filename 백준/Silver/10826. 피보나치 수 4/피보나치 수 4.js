const input = BigInt(
  require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
);

const dp = [];

dp[0] = BigInt(0);
dp[1] = BigInt(1);

for (let i = 2; i <= input; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}
let result = dp[input].toString();
console.log(result);