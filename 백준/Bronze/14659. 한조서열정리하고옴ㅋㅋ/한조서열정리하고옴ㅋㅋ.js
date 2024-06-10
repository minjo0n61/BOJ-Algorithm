const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const heights = input[1].split(" ").map(Number);

let maxKillCount = 0;

for (let i = 0; i < N; i++) {
  let currentKillCount = 0;
  
  for (let j = i + 1; j < N; j++) {
    if (heights[j] < heights[i]) {
      currentKillCount++;
    } else {
      break;
    }
  }
  
  maxKillCount = Math.max(maxKillCount, currentKillCount);
}

console.log(maxKillCount);
