const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const testcase = parseInt(input[0]);
let idx = 1;

for (let i = 0; i < testcase; i++) {
  const N = parseInt(input[idx++]);
  const arr = input[idx++].split(" ").map(Number);
  let visited = Array(N + 1).fill(false);
  let count = 0;

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      let stack = [i];
      while (stack.length > 0) {
        const num = stack.pop();
        if (!visited[num]) {
          visited[num] = true;
          const next = arr[num - 1];
          stack.push(next);
        }
      }
      count++;
    }
  }
  console.log(count);
}
