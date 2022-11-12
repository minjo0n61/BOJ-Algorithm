const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
let M = input.shift();
let N = input.shift();
let arr = [];
let answer = '';
for (let i = M; i <= N; i++) {
    let divide = [];
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            divide.push(j);
        }
    }
    if (divide.length === 2) {
        arr.push(i);
    }
}
if (arr.length === 0) {
    console.log(-1);
} else {
    answer += arr.reduce((pv, cv) => pv + cv, 0) + "\n" + arr[0];
    console.log(answer);
}