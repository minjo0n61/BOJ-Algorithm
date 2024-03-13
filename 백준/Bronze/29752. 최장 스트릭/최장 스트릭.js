const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
let num = input.shift()[0];
let stricks = input[0];
let count = 0;
let maxCount = [];

for (let i = 0; i < num; i++) {
  if (stricks[i] !== 0) {
    count++;
  }
  if (stricks[i] === 0) {
    count = 0;
  }
  maxCount.push(count);
}
console.log(Math.max(...maxCount));
