const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const k = parseInt(input, 10);

const sum = ((1n << BigInt(k)) - 1n) * (1n << BigInt(k - 1));

const binarySum = sum.toString(2);

console.log(binarySum);
