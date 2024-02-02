const [[A, B], [K, X]] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let result = 0;

for (let i = K - X; i < K + X + 1; i++) {
  if (i >= A && B >= i) {
    result++;
  }
}

if (result === 0) console.log("IMPOSSIBLE");
else console.log(result);
