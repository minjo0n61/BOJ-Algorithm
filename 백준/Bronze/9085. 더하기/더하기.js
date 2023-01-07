const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let testcase = input.shift();
let answer = [];
for (let i = 0; i < testcase; i++) {
    let num = input.shift();
    let group = input.shift();
    answer.push(group.reduce((pv, cv) => pv + cv, 0));
}
console.log(answer.join("\n"));