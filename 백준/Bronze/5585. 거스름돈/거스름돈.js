const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString();
let change = 1000 - (+input);
let count = 0;
const coins = [500, 100, 50, 10, 5, 1];
for (let i = 0; i < coins.length; i++) {
    let quo = Math.floor(change / coins[i]);
    change -= quo * coins[i];
    count += quo;
}
console.log(count);