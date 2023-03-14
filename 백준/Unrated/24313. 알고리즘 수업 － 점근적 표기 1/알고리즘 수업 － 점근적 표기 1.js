const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let [a1, a0] = input[0];
let c = input[1];
let n = input[2];

if (a1 * n + a0 <= c * n && c >= a1) {
    console.log(1);
} else {
    console.log(0);
}