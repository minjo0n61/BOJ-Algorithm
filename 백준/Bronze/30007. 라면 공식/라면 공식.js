const [N, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

for (let i = 0; i < N[0]; i++) {
  console.log(input[i][0] * (input[i][2] - 1) + input[i][1]);
}