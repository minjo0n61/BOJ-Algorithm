const input = require('fs').readFileSync(process.platform === "linux"?"/dev/stdin":"./input.txt").toString().trim().split('\n');

const N = parseInt(input[0]);
const seats = new Array(101).fill(0);
let cnt = 0;

const numbers = input[1].split(' ').map(Number);

for (let i = 0; i < N; i++) {
    const x = numbers[i];
    if (seats[x] === 0) {
        seats[x] = 1;
    } else {
        cnt++;
    }
}

console.log(cnt);