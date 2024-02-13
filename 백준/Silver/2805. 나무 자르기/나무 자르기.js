const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [testCase, cutWoodSum] = input.shift();
const woods = input[0].sort((a, b) => b - a);
let result = 0;
let start = 0;
let end = woods[0];

while (start <= end) {
  let sum = 0;
  let mid = Math.floor((start + end) / 2);

  for (let i = 0; i < woods.length; i++) {
    if (woods[i] > mid) {
      sum += woods[i] - mid;
    }
  }
  if (sum >= cutWoodSum) {
    if (mid > result) {
      result = mid;
    }
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);