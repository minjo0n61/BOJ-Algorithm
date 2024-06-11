const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input[0]);
const testCases = input.slice(1).map(Number);

const results = testCases.map(N => {
  const square = (N * N).toString();
  const NStr = N.toString();
  if (square.endsWith(NStr)) {
    return "YES";
  } else {
    return "NO";
  }
});

console.log(results.join("\n"));
