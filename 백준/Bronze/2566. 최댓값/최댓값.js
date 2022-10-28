const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(e => e.split(" ").map(Number));

let maxint = 0;
let row = 0;
let column = 0;

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (input[i][j] > maxint) {
            maxint = input[i][j];
            row = i;
            column = j;
        }
    }
}
console.log(maxint);
console.log(`${row + 1} ${column + 1}`);