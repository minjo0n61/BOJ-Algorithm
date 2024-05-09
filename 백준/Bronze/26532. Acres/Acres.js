const [a, b] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let result = Math.ceil((a * b) / 4840 / 5);
console.log(result);
