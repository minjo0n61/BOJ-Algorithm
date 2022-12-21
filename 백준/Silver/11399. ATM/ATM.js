const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, "").trim().split("\n").map(el => el.split(" ").map(Number));
const testcase = +input.shift();
input[0].sort((a, b) => a - b);
let sum = 0;
let arr = [];

for (let i = 0; i < testcase; i++) {
    if (i !== 0) {
        sum += input[0][i - 1];
    }
    arr.push(input[0][i] + sum);
}
console.log(arr.reduce((pv, cv) => {
    return pv + cv;
}, 0));