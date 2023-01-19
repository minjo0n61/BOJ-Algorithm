const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(""));
let answer = '';
let maxInt = Math.max(...input.map(el => el.length));
for (let i = 0; i < maxInt; i++) {
    for (let j = 0; j < 5; j++) {
        answer += input[j][i] || "";
    }
}
console.log(answer);