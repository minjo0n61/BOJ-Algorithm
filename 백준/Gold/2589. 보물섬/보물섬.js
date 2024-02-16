const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function bfs(y, x) {
  const coordinate = [];
  const visited = Array(N)
    .fill(0)
    .map((el) => Array(M).fill(0));
  let highNum = 0;

  coordinate.push([y, x]);
  visited[y][x] = 1;

  while (coordinate.length) {
    const currentCoordinate = coordinate.shift();

    for (let i = 0; i < 4; i++) {
      const cx = currentCoordinate[1] + dx[i];
      const cy = currentCoordinate[0] + dy[i];

      if (cx >= 0 && cx < M && cy >= 0 && cy < N) {
        if (input[cy][cx] === "L" && visited[cy][cx] === 0) {
          visited[cy][cx] = visited[currentCoordinate[0]][currentCoordinate[1]] + 1;
          highNum = Math.max(visited[cy][cx], highNum);
          coordinate.push([cy, cx]);
        }
      }
    }
  }
  return highNum - 1;
}

let highestNum = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (input[i][j] === "L") {
      highestNum = Math.max(highestNum, bfs(i, j));
    }
  }
}
console.log(highestNum);