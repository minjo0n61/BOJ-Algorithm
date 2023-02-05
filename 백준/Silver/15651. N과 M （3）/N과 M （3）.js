const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().toString().trim().split(" ").map(Number);
let [N, M] = input;
let result = [];
let answer = '';

function Backtracking(num) {
    if (num === M) {
        answer += `${result.join(" ")}\n`
        return
    }
    for (let i = 1; i < N + 1; i++) {
        result.push(i);
        Backtracking(num + 1);
        result.pop();
    }
}
Backtracking(0);
console.log(answer.trim());