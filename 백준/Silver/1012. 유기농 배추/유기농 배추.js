const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const testCase = parseInt(input.shift(), 10);
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let index = 0;

for (let t = 0; t < testCase; t++) {
  const [M, N, K] = input[index].split(" ").map(Number);
  index++;

  const visited = Array.from(Array(N), () => Array(M).fill(false));
  const ground = Array.from(Array(N), () => Array(M).fill(0));

  for (let k = 0; k < K; k++) {
    const [x, y] = input[index].split(" ").map(Number);
    ground[y][x] = 1;
    index++;
  }

  let bugNum = 0;

  for (let h = 0; h < N; h++) {
    for (let w = 0; w < M; w++) {
      if (ground[h][w] === 1 && !visited[h][w]) {
        const stack = [[h, w]];
        visited[h][w] = true;

        while (stack.length > 0) {
          const [y, x] = stack.pop();

          for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && nx < M && ny >= 0 && ny < N && ground[ny][nx] === 1 && !visited[ny][nx]) {
              stack.push([ny, nx]);
              visited[ny][nx] = true;
            }
          }
        }

        bugNum++;
      }
    }
  }

  console.log(bugNum);
}