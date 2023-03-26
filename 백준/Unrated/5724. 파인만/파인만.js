const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);

input.pop();
const arr = input;

for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = arr[i]; j > 0; j--) {
        sum += j * j;
    }
    console.log(sum);
}