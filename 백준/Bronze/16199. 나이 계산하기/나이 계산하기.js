const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let [y1, m1, d1] = input[0];
let [y2, m2, d2] = input[1];
let man = 0;
let count = y2 - y1 + 1;
let year = y2 - y1;

if (m1 < m2) {
    man = y2 - y1;
} else if (m1 === m2) {
    if (d1 <= d2) {
        man = y2 - y1;
    } else {
        man = y2 - y1 - 1;
    }
} else {
    man = y2 - y1 - 1;
}

console.log(man);
console.log(count);
console.log(year);