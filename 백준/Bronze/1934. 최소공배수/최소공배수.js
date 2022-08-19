const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const testcase = input[0];
for (let i = 1; i <= testcase; i++) {
    let line = input[i].split(" ").map(Number);
    let arr = [];
    for (let j = 1; j <= line[0]; j++) {
        if (line[0] % j === 0 && line[1] % j === 0) {
            arr.push(j);
        }
    }
    arr.sort((a, b) => a - b);
    let cdgy = arr.pop();
    console.log(line[0] * line[1] / cdgy);
}