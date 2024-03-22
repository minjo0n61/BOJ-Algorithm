const [N, K] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split(" ")
  .map(Number);

const visited = Array(100001).fill(false);
const queue = [[N, 0]];

while (queue.length > 0) {
  const [current, time] = queue.shift();
  const arr = [current - 1, current + 1, current * 2];
  if (current === K) {
    console.log(time);
    break;
  }

  for (let i = 0; i < arr.length; i++) {
    const next = arr[i];
    if (next >= 0 && next <= 100000 && !visited[next]) {
      visited[next] = true;
      queue.push([next, time + 1]);
    }
  }
}
