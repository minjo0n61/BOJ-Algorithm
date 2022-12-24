const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, "").trim().split("\n").map(el => el.split(" ").map(Number));
let share = [];
let answer = [];
for (let i = 0; i < 3; i++) {
    share.push(input[0][i] / input[1][i]);
}
let num = share.indexOf(Math.min(...share))

for (let i = 0; i < 3; i++) {
    if (i === num) {
        answer.push(0);
    } else {
        answer.push(input[0][i] - input[1][i] * share[num]);
    }
}

console.log(answer.join(" "));