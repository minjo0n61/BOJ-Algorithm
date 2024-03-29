const [firstLine, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = firstLine.split(" ").map(Number);
const line = input.map((line) => line.split(" ").map(Number));

const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
const dy = [-1, 0, 1, 1, 1, 0, -1, -1];

let maxDistance = 0;

function bfs(x, y) {
  const visited = Array.from(Array(N), () => Array(M).fill(false));
  const queue = [[x, y, 0]];
  visited[x][y] = true;

  while (queue.length > 0) {
    const [cx, cy, distance] = queue.shift();

    if (line[cx][cy] === 1) {
      return distance;
    }

    for (let i = 0; i < 8; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, distance + 1]);
      }
    }
  }
  return 0;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (line[i][j] === 0) {
      const distance = bfs(i, j);
      maxDistance = Math.max(maxDistance, distance);
    }
  }
}

console.log(maxDistance);
