const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, "").split('\n').map(Number);
const testcase = input.shift();

function isPrime(num) {
    if (num === 1) { return false; }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < testcase; i++) {
    let prime = [];
    let answer = [];
    for (let j = 2; j < input[i]; j++) {
        isPrime(j) ? prime.push(j) : null;
    }
    for (let j = 0; j < prime.length; j++) {
        for (let k = j; k < prime.length; k++) {
            if (prime[j] + prime[k] === input[i]) {
                answer.push([prime[j], prime[k]]);
            }
        }
    }
    console.log(answer.pop().join(" "));
}