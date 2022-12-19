const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, "").trim().split("\n").map(Number);

function isPrime(num) {
    if (num === 1) { return false }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let answer = [];

for (let i = 0; i < input.length - 1; i++) {
    let group = [];
    for (let j = input[i] + 1; j <= input[i] * 2; j++) {
        isPrime(j) ? group.push(j) : null;
    }
    answer.push(group.length);
}

console.log(answer.join("\n"));