const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const matrix = input.slice(1).map(line => line.split(''));

let isSatorSquare = true;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (matrix[i][j] !== matrix[j][i]) {
            isSatorSquare = false;
            break;
        }
    }
    if (!isSatorSquare) break;
}

if (isSatorSquare) {
    console.log("YES");
} else {
    console.log("NO");
}
