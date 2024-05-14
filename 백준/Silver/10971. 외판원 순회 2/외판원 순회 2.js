const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const N = input[0][0];
const graph = input.slice(1);

let minCost = Infinity;
const visited = Array(N).fill(false);

function dfs(node, count, cost) {
  if (count === N) {
    if (graph[node][0]) {
      minCost = Math.min(minCost, cost + graph[node][0]);
    }
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i] && graph[node][i]) {
      visited[i] = true;
      dfs(i, count + 1, cost + graph[node][i]);
      visited[i] = false;
    }
  }
}

visited[0] = true;
dfs(0, 1, 0);

console.log(minCost);