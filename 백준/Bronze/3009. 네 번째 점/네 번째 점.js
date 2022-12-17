const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, "").trim().split("\n").map(el => el.split(" ").map(Number));
let x = [];
let y = [];
for (let i = 0; i < input.length; i++) {
    x.push(input[i][0]);
    y.push(input[i][1]);
}
x.sort();
y.sort();
let answerx = x[0] === x[1] ? x[2] : x[0];
let answery = y[0] === y[1] ? y[2] : y[0];

console.log(answerx + " " + answery);