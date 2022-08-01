const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
let multi = input[0] * input[1] * input[2];
let arr = multi.toString();

for (let i = 0; i <= 9; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
        if (Number(arr[j]) === i) {
            count++;
        }
    }
    console.log(count);
}