const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString();
let primeNum = [];
let i = 2;
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

while (true) {
    isPrime(i) ? primeNum.push(i) : null;
    if (primeNum.length >= 2) {
        if (primeNum[primeNum.length - 1] * primeNum[primeNum.length - 2] > input) {
            console.log(primeNum[primeNum.length - 1] * primeNum[primeNum.length - 2]);
            break;
        }
    }
    i++;
}