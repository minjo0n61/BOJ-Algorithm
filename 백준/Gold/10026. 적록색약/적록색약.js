const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input.shift());
const image = input.map((line) => line.split(""));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const visited1 = Array(N)
  .fill()
  .map((el) => Array(N).fill(false));
const visited2 = Array(N)
  .fill()
  .map((el) => Array(N).fill(false));
let count = 0;
let redGreenBlindCount = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited1[i][j]) {
      const stack = [[i, j]];
      visited1[i][j] = true;
      while (stack.length) {
        const [cx, cy] = stack.pop();
        for (let d = 0; d < 4; d++) {
          const nx = cx + dx[d];
          const ny = cy + dy[d];
          if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited1[nx][ny] && image[nx][ny] === image[cx][cy]) {
            visited1[nx][ny] = true;
            stack.push([nx, ny]);
          }
        }
      }
      count++;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited2[i][j]) {
      const stack = [[i, j]];
      visited2[i][j] = true;
      while (stack.length) {
        const [cx, cy] = stack.pop();
        for (let d = 0; d < 4; d++) {
          const nx = cx + dx[d];
          const ny = cy + dy[d];
          if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited2[nx][ny]) {
            if (image[cx][cy] === "B") {
              if (image[nx][ny] === "B") {
                visited2[nx][ny] = true;
                stack.push([nx, ny]);
              }
            } else if (image[nx][ny] !== "B") {
              visited2[nx][ny] = true;
              stack.push([nx, ny]);
            }
          }
        }
      }
      redGreenBlindCount++;
    }
  }
}

console.log(`${count} ${redGreenBlindCount}`);
