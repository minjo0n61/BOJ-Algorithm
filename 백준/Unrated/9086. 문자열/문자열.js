const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
let testcase = +input.shift();

for (let i = 0; i < testcase; i++) {
    let str = input[i];
    let answer = "";
    answer += str[0];
    answer += str[str.length - 1];
    console.log(answer);
}