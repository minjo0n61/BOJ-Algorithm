const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((el) => +el);

const N = input.pop() * input.length;
const sum = input.reduce((a, b) => a + b, 0);

console.log(N - sum > 0 ? N - sum : 0);
