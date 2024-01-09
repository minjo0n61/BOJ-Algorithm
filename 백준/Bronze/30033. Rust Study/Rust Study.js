const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(el => +el));
const testcase = input.shift()[0];
const arr1 = input.shift();
const arr2 = input.shift();
let result = 0;

for (let i = 0; i < testcase; i++) {
    if (arr1[i] <= arr2[i]) {
        result++;
    }
}
console.log(result);