const [N,M] = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);
let result = [];
let answer = [];
let cheak = new Array(N + 1).fill(0);

function recur(num, start) {
    if (num === M) {
        return console.log(result.join(" "));
    }
    for (let i = start; i <= N; i++) {
        if (cheak[i] === 0) {
            cheak[i] = 1;
            result.push(i);
            recur(num + 1, i);
            cheak[i] = 0;
            result.pop();
        }
    }
}
recur(0, 1);