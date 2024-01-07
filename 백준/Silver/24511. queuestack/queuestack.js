const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let N = input.shift()[0];
let A = input.shift();
let B = input.shift();
let M = input.shift()[0];
let C = input.shift();
let result = [];

let i = 0;
while (result.length < M) {
    if (N - 1 >= 0) {
        if (A[N - 1] === 0) {
            result.push(B[N - 1]);
        }
        N -= 1;
    } else {
        result.push(C[i]);
        i += 1;
    }
}
console.log(result.join(" "));