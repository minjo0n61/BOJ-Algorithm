const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const papers = input.slice(1).map(line => line.split(' ').map(Number));

const grid = Array.from({length: 100}, () => Array(100).fill(0));

papers.forEach(([x1, y1, x2, y2]) => {
    for (let x = x1 - 1; x < x2; x++) {
        for (let y = y1 - 1; y < y2; y++) {
            grid[x][y]++;
        }
    }
});

const invisible = grid.flat().filter(count => count > M).length;

console.log(invisible);