const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
let testcase = +input.shift();
input.sort();
let M = new Map();
let A = [];
let answer = '';
input.forEach(el => {
    if (M.has(el[0])) {
        M.set(el[0], M.get(el[0]) + 1);
    }
    else {
        M.set(el[0], 1);
    }
});
let arr = M.entries();
for (let [key, value] of arr) {
    A.push([key, value]);
}
for (let i = 0; i < A.length; i++) {
    if (A[i][1] >= 5) {
        answer += A[i][0];
    }
}
if (answer.length === 0) {
    console.log("PREDAJA");
}
else {
    console.log(answer);
}