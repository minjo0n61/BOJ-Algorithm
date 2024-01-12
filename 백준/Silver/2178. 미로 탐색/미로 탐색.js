const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(el => +el);

let map = input.map(el => el.split("").map(Number));
let num = new Array(N).fill().map(_ => new Array(M).fill(1));

let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];

let queue = [];
queue.push([0, 0]);
map[0][0] = 0;

while (queue.length) {
    let [ax, ay] = queue.shift();
    for (let i = 0; i < 4; i++) {
        let x = ax + dx[i];
        let y = ay + dy[i];
        if (x < 0 || y < 0 || x >= N || y >= M) {
            continue;
        }
        if (map[x][y] === 0) {
            continue;
        }
        if (map[x][y] === 1) {
            map[x][y] = 0;
            num[x][y] = num[ax][ay] + 1;
            queue.push([x, y]);
        }
    }
}

console.log(num[N - 1][M - 1]);