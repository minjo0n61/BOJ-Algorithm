const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(""));

let result = '';
let maxNum = Math.max(...input.map(el => el.length));

for (let i = 0; i < maxNum; i++) {
    for (let j = 0; j < 5; j++) {
        if (input[j][i]) {
            result += input[j][i];
        }
        else {
            result += "";
        }
    }
}
console.log(result);