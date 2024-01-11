const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(el => +el));
let result = [];
let i = 0;

while (i < input.length) {
    if (input[i][0] * input[i][1] > 0) {
        if (input[i][0] > 0) {
            result.push("Q1");
        }
        else {
            result.push("Q3");
        }
    } else if (input[i][0] * input[i][1] === 0) {
        result.push("AXIS");
    } else {
        if (input[i][0] < 0) {
            result.push("Q2");
        } else {
            result.push("Q4");
        }
    }
    i++;
}

console.log(result.join("\n"));