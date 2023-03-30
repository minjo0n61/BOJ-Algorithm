const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(el => +el));
let [x, y] = input.shift();
let value = x / y * 1000;
let num = input.shift()[0];
let arr = [value];

for (let i = 0; i < num; i++) {
    let [xn, yn] = input.shift();
    let pricen = xn / yn * 1000;
    arr.push(pricen);
}
arr.sort((a, b) => a - b);
console.log(arr[0]);