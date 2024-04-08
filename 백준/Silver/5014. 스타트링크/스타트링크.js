const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const [F, S, G, U, D] = input;
const visited = Array(F + 1).fill(false);
const queue = [[S, 0]];

while (queue.length) {
  const [current, count] = queue.shift();
  
  if (current === G) {
    console.log(count);
    process.exit(0);
  }
  
  const up = current + U;
  const down = current - D;
  
  if (up <= F && !visited[up]) {
    visited[up] = true;
    queue.push([up, count + 1]);
  }
  
  if (down >= 1 && !visited[down]) {
    visited[down] = true;
    queue.push([down, count + 1]);
  }
}

console.log("use the stairs");
