const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().split("\n").map(Number);
let sum = input.reduce((pv, cv) => pv + cv, 0) - 100;
let [a, b] = [0, 0];
for (let i = 0; i < 9; i++) {
    for (let j = i; j < 9; j++) {
        if (i !== j) {
            if (input[i] + input[j] === sum) {
                [a, b] = [i, j];
                break;
            }
        }
    }
}

input.splice(a, 1);
input.splice(b - 1, 1);
console.log(input.join("\n"));