const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);
let [N, M] = input;
let result = [];
let answer = [];

function recur(num, start) {
    if (num === M) {
        return answer.push(`${result.join(" ")}`);
    }
    for (let i = start; i < N + 1; i++) {
        result.push(i);
        recur(num + 1, i);
        result.pop();
    }
}
recur(0, 1);
console.log(answer.join("\n"));