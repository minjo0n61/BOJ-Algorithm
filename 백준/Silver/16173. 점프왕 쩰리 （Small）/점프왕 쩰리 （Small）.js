const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const map = input.slice(1).map(line => line.split(' ').map(Number));

const directions = [[0, 1], [1, 0]];
const queue = [[0, 0]];
const visited = Array.from({ length: N }, () => Array(N).fill(false));
visited[0][0] = true;

while (queue.length > 0) {
    const [x, y] = queue.shift();
    const jumpDistance = map[x][y];

    if (jumpDistance === -1) {
        console.log("HaruHaru");
        return;
    }

    for (const [dx, dy] of directions) {
        const nx = x + dx * jumpDistance;
        const ny = y + dy * jumpDistance;

        if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
            queue.push([nx, ny]);
            visited[nx][ny] = true;
        }
    }
}

console.log("Hing");
