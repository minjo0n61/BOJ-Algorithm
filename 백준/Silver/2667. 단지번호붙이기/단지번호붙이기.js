let [N, ...arr] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');
let grid = [];
arr.map((el) => grid.push(el.split('')));
let dx = [-1, 1, 0, 0];
let dy = [0, 0, 1, -1];
let ans = [];
let num = 1;
let queue = [];

const isVailed = (x, y) => {
    if((x >= 0 && x < N) && (y >= 0 && y < N) && grid[x][y] == 1) return true
    return false
} 

const bfs = () => {
    while(queue.length != 0) {
        let p = queue.shift();
        for(let i = 0; i < 4; i++) {
            let nx = p[0] + dx[i];
            let ny = p[1] + dy[i];
            if(isVailed(nx, ny)) {
                grid[nx][ny] = 0;
                num += 1;
                queue.push([nx, ny])
            }
        }
    }
}

for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
        if(isVailed(i,j)) {
            queue = [[i,j]];
            num = 1;
            grid[i][j] = 0;
            bfs();
            ans.push(num);
        }
    }
}
ans.sort((a,b) => {return a-b});
console.log(ans.length)
console.log(ans.join('\n'));