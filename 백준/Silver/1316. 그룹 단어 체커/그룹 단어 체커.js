let input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
const testCase = input.shift();
input = input.map((el) => el.split(""));
let count = 0;
for (let i = 0; i < testCase; i++) {
    let saveStr = [];
    let repeatStr = "";
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] !== input[i][j + 1]) {
            repeatStr = input[i][j];
            if (saveStr.includes(repeatStr) === false) {
                saveStr.push(repeatStr);
            }
            else {
                count--;
                break;
            }
        }
    }
    count++;
}

console.log(count);