const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().replace(/\r/g, '').split("\n").map(el => el.split(" "));
const testCase = +input.shift();
let answer = '';
for (let i = 0; i < testCase; i++) {
    let line = input[i];
    let eachline = [];
    for (let j = line.length - 1; j >= 0; j--) {
        eachline.push(line[j]);
    }
    answer += `Case #${i + 1}: ${eachline.join(" ")}` + "\n";
}
console.log(answer.trim());