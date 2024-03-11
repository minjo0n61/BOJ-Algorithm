const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [n, m] = input.shift();
let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];
let visited = Array(m)
  .fill()
  .map((_) => Array(n).fill(0));
let queue = [];
let countDay = 0;

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][j] === 1) {
      visited[i][j] = 1;
      queue.push([i, j, 0]);
    }
    if (input[i][j] === -1) {
      visited[i][j] = -1;
    }
  }
}
let index = 0;
function bfs() {
  while (queue.length != index) {
    let [x, y, day] = queue[index];

    for (let i = 0; i < 4; i++) {
      let cx = x + dx[i];
      let cy = y + dy[i];

      if (cx >= 0 && cy >= 0 && cx < m && cy < n) {
        if (visited[cx][cy] === 0) {
          visited[cx][cy] = 1;
          queue.push([cx, cy, day + 1]);
          countDay = day + 1;
        }
      }
    }
    index++;
  }
}

bfs();

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j] === 0) {
      countDay = -1;
      break;
    }
  }
}
console.log(countDay);
