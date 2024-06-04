const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input[0];
const cases = input.slice(1);

const triangularNumbers = [];
for (let n = 1; ; n++) {
  const t = (n * (n + 1)) / 2;
  if (t > 1000) break;
  triangularNumbers.push(t);
}

function isEureka(num) {
  const len = triangularNumbers.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < len; k++) {
        if (triangularNumbers[i] + triangularNumbers[j] + triangularNumbers[k] === num) {
          return true;
        }
      }
    }
  }
  return false;
}

const results = cases.map(isEureka).map(res => (res ? 1 : 0));
console.log(results.join("\n"));
