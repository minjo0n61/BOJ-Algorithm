const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let answer = [];
let [a, b] = input[0];
let [c, d] = input[1];
let n = getGcd(a * d + c * b, b * d);
console.log(parseInt((a * d + c * b) / n), parseInt(b * d / n));

function getGcd(a, b) {
    if (b === 0) {
        return a;
    }
    return getGcd(b, a % b);
}