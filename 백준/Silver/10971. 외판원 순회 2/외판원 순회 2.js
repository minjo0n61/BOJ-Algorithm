const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(el => el.split(" ").map(Number));

const N = input.shift()[0];
const costs = input;

const visited = Array(N).fill(false);
let minCost = Infinity;
const stack = [];

function tsp(current, count, cost) {
  if (count === N && costs[current][0] > 0) {
    minCost = Math.min(minCost, cost + costs[current][0]);
    return;
  }

  for (let i = 1; i < N; i++) {
    if (!visited[i] && costs[current][i] > 0) {
      visited[i] = true;
      stack.push(i);
      tsp(i, count + 1, cost + costs[current][i]);
      visited[i] = false;
      stack.pop();
    }
  }
}

visited[0] = true;
stack.push(0);
tsp(0, 1, 0);

console.log(minCost);