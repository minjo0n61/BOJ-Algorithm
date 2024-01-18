const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().split("\n").map(el => el.split(" ").map(Number));
const testcase = input.shift()[0];

for (let i = 0; i < testcase; i++) {
    let p = input[i][0];
    let t = input[i][1];
    console.log(p + Math.floor(t / 4) - Math.floor(t / 7));
}