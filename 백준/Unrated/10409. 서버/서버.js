const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));

let [n, T] = input[0];
let arr = input[1];
for (let i = 0; i < n; i++) {
    let arrNum = arr.slice(0, i + 1);
    let sum = arrNum.reduce((a, b) => a + b, 0);

    if (sum > T) {
        console.log(i);
        break;
    } else if (i === n - 1) {
        console.log(i+1);
    }
}