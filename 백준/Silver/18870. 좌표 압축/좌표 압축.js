const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, "").trim().split("\n").map(el => el.split(" ").map(Number));
const testcase = +input.shift();

let set = Array.from(new Set([...input[0]])).sort((a, b) => a - b);
let answer = [];
let object = {};

set.forEach((key, value) => object[key] = value)

for (let j = 0; j < testcase; j++) {
    answer.push(object[input[0][j]]);
}

console.log(answer.join(" "));