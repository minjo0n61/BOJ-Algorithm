let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [m, n] = input.shift();

let visited = Array(n)
  .fill()
  .map((_) => Array(m).fill(0));
let grid = Array(n)
  .fill()
  .map((_) => Array(m).fill(-1));

let roomCount = 0;
let rooms = [];
let maxPlusRooms = [];
// west 1 north 2 east 4 south 8
let dx = [0, -1, 0, 1];
let dy = [-1, 0, 1, 0];

input = input.map((row) =>
  row.map((cell) => {
    const binaryStr = cell.toString(2).padStart(4, "0");
    return binaryStr.split("").reverse().join("");
  })
);

function bfs(startX, startY) {
  let queue = [[startX, startY]];
  visited[startX][startY] = 1;
  grid[startX][startY] = roomCount;
  let roomSize = 1;

  while (queue.length) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let cx = x + dx[i];
      let cy = y + dy[i];
      if (input[x][y][i] == "0" && visited[cx][cy] === 0) {
        if (cx < n && cx >= 0 && cy < m && cy >= 0) {
          visited[cx][cy] = 1;

          queue.push([cx, cy]);
          roomSize++;
          grid[cx][cy] = roomCount;
        }
      }
    }
  }
  roomCount++;
  rooms.push(roomSize);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (visited[i][j] === 0) {
      bfs(i, j);
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (i !== n - 1) {
      if (grid[i][j] !== grid[i + 1][j]) {
        maxPlusRooms.push(rooms[grid[i][j]] + rooms[grid[i + 1][j]]);
      }
    }
    if (j !== m - 1) {
      if (grid[i][j] !== grid[i][j + 1]) {
        maxPlusRooms.push(rooms[grid[i][j]] + rooms[grid[i][j + 1]]);
      }
    }
  }
}

console.log(rooms.length);
console.log(Math.max(...rooms));
console.log(Math.max(...maxPlusRooms));
