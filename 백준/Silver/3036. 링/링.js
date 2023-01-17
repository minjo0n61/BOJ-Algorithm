const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let testcase = input.shift();
let ring = input[0];
let answer = [];

for (let i = 1; i < testcase; i++) {
    let compareNum = ring[i];
    let num = getGcd(ring[0], compareNum);
    let a = ring[0] / num;
    let b = compareNum / num;
    answer.push(`${a}/${b}`);
}

console.log(answer.join("\n"));

function getGcd(a, b) {
    if (b === 0) {
        return a;
    }
    return getGcd(b, a % b);
}