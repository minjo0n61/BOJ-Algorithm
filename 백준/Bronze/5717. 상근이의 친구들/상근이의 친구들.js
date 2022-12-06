const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let answer = "";
for (let i = 0; i < input.length - 1; i++) {
    answer += `${input[i][0] + input[i][1]}` + "\n";
}
console.log(answer.trim());