const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const testCase = input.shift();
const dp = Array(Math.max(...input) + 1).fill(0);
const result = [];
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
dp[4] = 7;
dp[5] = 13;
dp[6] = 24;
dp[7] = 44;

for (let i = 0; i < testCase; i++) {
  if (dp[input[i]] !== 0) {
    result.push(dp[input[i]]);
  } else {
    for (let j = 4; j <= input[i]; j++) {
      if (dp[j] === 0) {
        dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
      }
    }
    result.push(dp[input[i]]);
  }
}
console.log(result.join("\n"));
