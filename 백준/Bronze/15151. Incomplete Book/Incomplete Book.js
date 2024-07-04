const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const k = +input[0];
const d = +input[1];

let daysLeft = d;
let daysToWrite = k;
let booksCount = 0;

while (daysLeft >= daysToWrite) {
    daysLeft -= daysToWrite;
    booksCount++;
    daysToWrite *= 2;
}

console.log(booksCount);
