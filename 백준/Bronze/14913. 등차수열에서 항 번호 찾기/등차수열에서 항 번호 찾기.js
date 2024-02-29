const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
const a = input[0];
const d = input[1];
const k = input[2];

if ((k-a)%d == 0 && Math.floor((k-a)/d) >= 0) {
    console.log(Math.floor((k-a)/d) + 1);
} else {
    console.log('X');
}
