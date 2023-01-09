const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let testcase = input.shift();
let answer = '';
function getGcd(a, b) {
    if (b === 0) {
        return a;
    }
    return getGcd(b, a % b);
}

for (let i = 0; i < testcase; i++) {
    answer += (input[i][0] * input[i][1] / getGcd(input[i][0], input[i][1]) + " " + getGcd(input[i][0], input[i][1])) + "\n";
}

console.log(answer.trim());