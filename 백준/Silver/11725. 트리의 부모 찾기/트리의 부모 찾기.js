const [N, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const graph = Array(N[0] + 1)
  .fill()
  .map((el) => []);
const parents = Array(N[0] + 1).fill(0);
const arr = [];

for (let i = 0; i < N[0] - 1; i++) {
  const [a, b] = input[i];
  graph[a].push(b);
  graph[b].push(a);
}

function bfs(node) {
  const queue = [node];
  parents[node] = -1;
  while (queue.length) {
    const current = queue.shift();
    for (let i = 0; i < graph[current].length; i++) {
      const neighbor = graph[current][i];
      if (!parents[neighbor]) {
        parents[neighbor] = current;
        queue.push(neighbor);
      }
    }
  }
}

bfs(1);

for (let i = 2; i <= N[0]; i++) {
  arr.push(parents[i]);
}
console.log(arr.join("\n"));
