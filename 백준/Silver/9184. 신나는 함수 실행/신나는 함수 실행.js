const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(el => +el));
let dp = new Array(21).fill().map(el => new Array(21).fill().map(el => new Array(21).fill(0)));
let answer = '';

function w(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return 1;
    }
    if (a > 20 || b > 20 || c > 20) {
        return w(20, 20, 20);
    }
    if (dp[a][b][c] !== 0) {
        return dp[a][b][c];
    }
    if (a < b && b < c) {
        return dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c)
    }
    else {
        return dp[a][b][c] = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);
    }
}

for (let i = 0; i < input.length - 1; i++) {
    let [a, b, c] = input[i];
    answer += `w(${a}, ${b}, ${c}) = ${w(a, b, c)}\n`;
}
console.log(answer.trim());