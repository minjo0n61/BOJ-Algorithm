const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const testcase = input[0];

for (let i = 1; i <= testcase; i++) {
    let score = input[i].split("X");
    let sum = 0;
    for (let j = 0; j < score.length; j++) {
        for (let h = 1; h <= score[j].length; h++) {
            sum += h;
        }
    }
    console.log(sum);
}