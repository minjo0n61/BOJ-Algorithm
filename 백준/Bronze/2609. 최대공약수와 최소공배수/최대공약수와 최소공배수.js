const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

function cdgy(a, b) {
    let arr = [];
    if (a >= b) {
        for (let i = 1; i <= b; i++) {
            if (a % i === 0 && b % i === 0) {
                arr.push(i);
            }
        }
    }
    if (b >= a) {
        for (let i = 1; i <= a; i++) {
            if (a % i === 0 && b % i === 0) {
                arr.push(i);
            }
        }
    }
    return arr.pop();
}
console.log(cdgy(input[0], input[1]));

function cdgb(a, b) {
    console.log((a * b) / cdgy(a, b))
}
cdgb(input[0], input[1]);