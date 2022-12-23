const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, "").trim().split("\n").map(el => el.split(" ").map(Number));
let [n, m] = input.shift();
let arrA = input.shift();
let S = new Array(n);
let answer = [];

for (let i = 0; i < n; i++) {
    if (i === 0) {
        S[i] = arrA[i];
    } else {
        S[i] = S[i - 1] + arrA[i];
    }
}

for (let i = 0; i < m; i++) {
    if (input[i][0] !== 1) {
        answer.push(S[input[i][1] - 1] - S[input[i][0] - 2]);
    } else {
        answer.push(S[input[i][1] - 1]);
    }

}

console.log(answer.join("\n"));