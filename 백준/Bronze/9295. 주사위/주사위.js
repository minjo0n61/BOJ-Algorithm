const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let testcase = input.shift();
let answer = '';
for (let i = 0; i < testcase; i++) {
    answer += `Case ${i + 1}: ${input[i].reduce((pv, cv) => pv + cv, 0)}` + "\n";
}
console.log(answer.trim());