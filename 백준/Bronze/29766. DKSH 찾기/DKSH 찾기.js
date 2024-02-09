const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString();

let result = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === "D" && input[i + 1] === "K" && input[i + 2] === "S" && input[i + 3] === "H") {
    result++;
    i += 3;
  }
}

console.log(result);
