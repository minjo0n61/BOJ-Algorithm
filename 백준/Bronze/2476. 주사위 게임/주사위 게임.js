const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let testCase = +input.shift();
let money = [];
for (let i = 0; i < testCase; i++) {
    let [a, b, c] = input[i].sort((a, b) => a - b);
    rule(a, b, c);
}
money.sort((a, b) => b - a);
console.log(money[0]);

function rule(a, b, c) {
    if (a === b && b === c) {
        money.push(10000 + a * 1000);
    }
    else if (
        a === b ||
        a === c) {
        money.push(1000 + a * 100);
    }
    else if (b === c) {
        money.push(1000 + b * 100);
    }
    else {
        money.push(100 * c);
    }
}