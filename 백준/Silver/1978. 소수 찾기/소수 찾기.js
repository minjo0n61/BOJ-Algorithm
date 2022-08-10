const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let testcase = Number(input[0]);
let line = input[1].split(" ").map(Number);
let count = 0;
for (let i = 0; i < testcase; i++) {
    let arr = [];
    for (let j = 1; j <= line[i]; j++) {
        if (line[i] % j === 0) { arr.push(j) }
    }
    if (arr.length === 2) { count++; }
}
console.log(count);