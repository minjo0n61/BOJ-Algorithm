const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(el => +el);

let [m, n] = input;
let result = [];

for (let i = m; i <= n; i++) {
    isPrime(i);
}

console.log(result.join("\n"));


function isPrime(num) {
    if (num !== 1) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return;
            }
        }
        return result.push(num);
    }
}