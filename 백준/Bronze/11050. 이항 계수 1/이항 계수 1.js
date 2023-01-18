const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);

let answer = factorial(input[0]) / (factorial(input[1]) * factorial(input[0] - input[1]));

console.log(answer);

function factorial(num) {
    let a = 1;
    for (let i = 1; i <= num; i++) {
        a *= i;
    }
    return a;
}