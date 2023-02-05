const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().toString().trim().split(" ").map(Number);
let [N, M] = input;
let result = [];
let cheak = new Array(N + 1).fill(0);
let answer = '';

function Backtracking(num, start) {
    if (num === M) {
        answer += `${result.join(" ")}\n`
        return
    }
    for (let i = start; i < N + 1; i++) {
        result.push(i);
        Backtracking(num + 1, i);
        result.pop();
    }
}
Backtracking(0, 1);
console.log(answer.trim());