const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString();
const num = +input;
let arr = [];
function splitNum(num, arr) {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
            return splitNum(num / i, arr)
        }
    }
    return arr;
}

console.log((splitNum(num, arr)).join("\n"));