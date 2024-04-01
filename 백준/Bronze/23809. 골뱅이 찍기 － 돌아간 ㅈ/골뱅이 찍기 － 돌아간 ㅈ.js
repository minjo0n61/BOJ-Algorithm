function golbangePrintZ(N) {
  let answer = new Array(N * 5).fill('');

  for (let idx = 0; idx < N * 5; idx++) {
    if (2 * N - 1 < idx && idx < 2 * N + N) {
      answer[idx] = "@".repeat(N * 3);
    } else if (idx < 2 * N) {
      answer[idx] = "@".repeat(N) + " ".repeat((3 - Math.floor(idx / N)) * N) + "@".repeat(N);
    } else {
      answer[idx] = "@".repeat(N) + " ".repeat((Math.floor(idx / N) * N - N)) + "@".repeat(N);
    }
  }

  return answer.join("\n");
}

const fs = require('fs');
const N = parseInt(fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim(), 10);

console.log(golbangePrintZ(N));
