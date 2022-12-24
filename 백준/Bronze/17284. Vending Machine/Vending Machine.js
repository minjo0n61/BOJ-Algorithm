const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().split(" ").map(Number);
let money = 5000;

function vendingMachine(num) {
    if (num === 1) {
        money = money - 500;
    } else if (num === 2) {
        money = money - 800;
    } else if (num === 3) {
        money = money - 1000;
    }
}
for (let i = 0; i < input.length; i++) {
    vendingMachine(input[i]);
}
console.log(money);