const [testcase, input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let odd = 0;
let even = 0;

for (let i = 0; i < testcase[0]; i++) {
  input[i] % 2 === 0 ? even++ : odd++;
}

console.log(odd >= even ? "Sad" : "Happy");
