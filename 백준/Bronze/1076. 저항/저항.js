const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");

const resistance = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
}
let num = '';

for (let i = 0; i < input.length - 1; i++) {
    num += resistance[input[i]].toString();
}
console.log(Number(num) * 10 ** resistance[input[input.length - 1]]);