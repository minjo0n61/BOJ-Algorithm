//S[i] = S[i-1] + A[i]
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, "").trim().split("\n").map(el => el.split(" ").map(Number));
const [N, M] = input.shift();
let A = input.shift();
let S = new Array(N);
let answer = [];

for (let i = 0; i < N; i++) {
    if (i === 0) {
        S[0] = A[0];
    } else {
        S[i] = S[i - 1] + A[i];
    }
}

function sectionHap([num1, num2]) {
    if (num1 === 1) {
        return S[num2 - 1];
    }
    return S[num2 - 1] - S[num1 - 2];
}

for (let i = 0; i < M; i++) {
    answer.push(sectionHap(input[i]));
}
console.log(answer.join("\n"));