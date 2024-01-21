const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");

const n = +input[0];
const arr = [];

if (n == 0) {
    console.log(0);
} else {
    for (let i = 1; i <= n; i++) {
        arr.push(+input[i]);
    }
    arr.sort((a, b) => a - b);

    const excludedNum = Math.round(n * 0.15);

    const answer = Math.round(
        arr.slice(excludedNum, n - excludedNum).reduce((a, b) => a + b, 0) /
        (n - 2 * excludedNum)
    );

    console.log(answer);
}
