const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\n');

const N = parseInt(input[0]);
const lines = input.slice(1).map(line => line.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);

let totalLength = 0;
let currentStart = lines[0][0];
let currentEnd = lines[0][1];

for (let i = 1; i < N; i++) {
    if (lines[i][0] <= currentEnd) {
        currentEnd = Math.max(currentEnd, lines[i][1]);
    } else {
        totalLength += currentEnd - currentStart;
        currentStart = lines[i][0];
        currentEnd = lines[i][1];
    }
}

totalLength += currentEnd - currentStart;

console.log(totalLength);