const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
let cnt = input[0];
let answer = [];
while (cnt <= input[1]) {
    answer += `All positions change in year ${cnt}\n`
    cnt += 60;
}
console.log(answer.trim());