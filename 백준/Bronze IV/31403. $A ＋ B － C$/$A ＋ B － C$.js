const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n")
  .map(Number);

console.log(input[0] + input[1] - input[2]);
console.log(input[0].toString() + input[1].toString() - input[2].toString());
