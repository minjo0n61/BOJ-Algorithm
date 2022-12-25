const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, "").trim().split("\n").map(el => el.split(" ").map(Number));
let testcase = input.shift();
let answer = [];

for (let i = 0; i < testcase; i++) {
    answer.push(input[i][0] / input[i][1] * input[i][0] / input[i][1]);
}
console.log(answer.join("\n"));