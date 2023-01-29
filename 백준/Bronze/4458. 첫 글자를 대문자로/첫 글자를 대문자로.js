let input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
let testcase = +input.shift();
let answer = '';
for (let i = 0; i < testcase; i++) {
    let group = [];
    let firststr = input[i][0].toUpperCase();
    let leftstr = input[i].slice(1, input[i].length);
    let result = firststr + leftstr;
    group.push(result);
    answer += group.join(" ") + "\n";
}
console.log(answer.trim());