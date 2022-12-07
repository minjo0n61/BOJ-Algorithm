const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
input.sort((a, b) => a - b);
let sum = input.reduce((pv, cv) => pv + cv, 0);
let num1, num2;
for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
        if (sum - (input[i] + input[j]) === 100) {
            [num1, num2] = [i, j];
            break;
        }
    }
}
for (let i = 0; i < 9; i++) {
    if (i !== num1 && i !== num2) {
        console.log(input[i]);
    }
}