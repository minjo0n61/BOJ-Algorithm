const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, "").trim().split("\n").map(el => el.split(" ").map(Number));
let [N, M] = input.shift();
let arrA = input[0];
let S = new Array(N);

for (let i = 0; i < N; i++) {
    if (i === 0) {
        S[i] = arrA[i];
    } else {
        S[i] = arrA[i] + S[i - 1];
    }
}
let answer = [];
let C = Array(M).fill(0n);
for (let i = 0; i < N; i++) {
    answer.push(S[i] % M);
}

answer.forEach(el => C[el]++);
const o = C[0] + C.reduce((a, b) => a + (b * (b - 1n)) / 2n, 0n)
console.log(o.toString());