const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().split("\n").map(el => +el);
let S = new Map();
let sum = 0;
let answer = [];
input.forEach(el => {
    if (S.has(el)) {
        S.set(el, S.get(el) + 1);
    } else {
        S.set(el, 1);
    }
})

let M = S.entries()
for (const [key, value] of M) {
    answer.push([key, value]);
    sum += key * value;
}
answer.sort((a, b) => b[1] - a[1]);
console.log(sum / 10);
console.log(answer[0][0]);