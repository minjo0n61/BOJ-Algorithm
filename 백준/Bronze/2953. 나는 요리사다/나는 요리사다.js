const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(el => +el));
let line = 0;
let totalSum = 0;

for (let i = 0; i < input.length; i++) {
    let sum = input[i].reduce((pv, cv) => pv + cv, 0);
    if (totalSum < sum) {
        totalSum = sum;
        line = i + 1;
    }
}
console.log(line + " " + totalSum);