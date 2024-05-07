const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
const T = input.shift()[0];

for (let i = 0; i < input.length; i++) {
  const N = input[i][0];
  const M = input[i][1];
  console.log(N - 1);
  i += M;
}
