const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(el => +el));
const testcase = input.shift()[0];
let result = 0;

for (let i = 0; i < testcase; i++) {
    isPrime(input[0][i]);
}
function isPrime(num) {
    if (num === 1) return;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return;
        }
    }
    return result++;
}

console.log(result);