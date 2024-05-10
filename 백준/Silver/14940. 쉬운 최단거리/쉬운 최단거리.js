const [[N, M], ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
const visited = Array(N)
  .fill()
  .map((_) => Array(M).fill(false));
const result = Array(N)
  .fill()
  .map((_) => Array(M).fill(-1));

let queue = [];

let [x, y] = [0, 0];
let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (input[i][j] === 2) {
      x = i;
      y = j;
      queue.push([x, y]);
      visited[x][y] = true;
      result[x][y] = 0;
    }
    if (input[i][j] === 0) {
      result[i][j] = 0;
    }
  }
}

while (queue.length) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]) {
      if (input[nx][ny] === 1) {
        visited[nx][ny] = true;
        result[nx][ny] = result[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  console.log(result[i].join(" "));
}
