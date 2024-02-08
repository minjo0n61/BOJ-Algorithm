const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const testCase = input.shift()[0];

for (let i = 0; i < testCase; i++) {
  if (input[i][0] < input[i][1]) {
    console.log("NO BRAINS");
  } else {
    console.log("MMM BRAINS");
  }
}
