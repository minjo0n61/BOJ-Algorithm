const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const N = input.shift()[0];
const [start, end] = input.shift();
const M = input.shift()[0];

const visited = Array(N + 1).fill(0);
const graph = Array(N + 1)
  .fill()
  .map((_) => []);

input.map(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a);
});

function dfs(start, end) {
  let stack = [[start, 0]];
  //시작하는 곳을 기준으로 가중치 0 설정
  visited[start] = 1;

  while (stack.length) {
    let [currentNum, depth] = stack.pop();
    if (currentNum === end) {
      return depth;
    }

    for (let i = 0; i < graph[currentNum].length; i++) {
      if (!visited[graph[currentNum][i]]) {
        visited[graph[currentNum][i]] = 1;
        stack.push([graph[currentNum][i], depth + 1]);
      }
    }
  }
  return -1;
}

console.log(dfs(start, end));