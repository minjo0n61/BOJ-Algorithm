const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

let arr = '';
let sum = '';

for (let i = 0; ; i++) {
    arr = input[i].split(" ");
    if (Number(arr[0]) + Number(arr[1]) === 0) {
        break;
    }
    sum += Number(arr[0]) + Number(arr[1]) + "\n";
}

console.log(sum);
