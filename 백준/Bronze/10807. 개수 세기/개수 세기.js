const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().split("\n").map(e => e.split(" ").map(Number));

const N = input[0][0];
const v = input[2][0];
let count = 0;
for (let i = 0; i < N; i++) {
    if (v === input[1][i]) {
        count++;
    }
}
console.log(count);