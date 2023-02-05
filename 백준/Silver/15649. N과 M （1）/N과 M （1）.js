const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);
let [N, M] = input;
let result = [];
let chk = new Array(N + 1).fill(0);

function Backtracking(num) {
    if (num === M) {
        return console.log(result.join(" "));
    }
    for (let i = 1; i < N + 1; i++) {
        if (chk[i] === 0) {
            chk[i] = 1;
            result.push(i);
            Backtracking(num + 1);
            chk[i] = 0;
            result.pop();
        }
    }
}

Backtracking(0);