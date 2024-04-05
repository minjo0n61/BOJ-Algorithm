const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const boardSize = parseInt(input[0]);
const appleCount = parseInt(input[1]);
const apples = input.slice(2, 2 + appleCount).map((line) => line.split(" ").map(Number));
const moveCount = parseInt(input[2 + appleCount]);
const moves = input.slice(3 + appleCount).map((line) => [parseInt(line.split(" ")[0]), line.split(" ")[1]]);

const board = Array.from(Array(boardSize + 1), () => Array(boardSize + 1).fill(0));
apples.forEach(([row, col]) => {
  board[row][col] = 1; 
});

let time = 0;
let direction = 0; 
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let snake = [[1, 1]]; 

while (true) {
  const head = snake[0];
  const nx = head[0] + dx[direction];
  const ny = head[1] + dy[direction];

  if (nx < 1 || ny < 1 || nx > boardSize || ny > boardSize || snake.some((pos) => pos[0] === nx && pos[1] === ny)) {
    console.log(time + 1);
    break;
  }

  if (board[nx][ny] === 1) {
    board[nx][ny] = 0; 
  } else {
    snake.pop(); 
  }

  snake.unshift([nx, ny]); 

  if (moves.length > 0 && moves[0][0] === time + 1) {
    if (moves[0][1] === "D") direction = (direction + 1) % 4;
    else direction = (direction + 3) % 4;
    moves.shift();
  }

  time++;
}
