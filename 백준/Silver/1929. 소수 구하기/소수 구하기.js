const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().split(" ").map(Number);
let answer = [];

function isPrime(num) {
    if (num !== 1) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return;
            }
        }
        return answer.push(num);
    }
}

for (let i = input[0]; i <= input[1]; i++) {
    isPrime(i);
}

console.log(answer.join("\n"));