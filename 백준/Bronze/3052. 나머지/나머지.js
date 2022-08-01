const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let arr = [];

input.forEach(element => {
    let num = element % 42;
    if (arr.indexOf(num) === -1) {
        arr.push(num);
    }
});
console.log(arr.length);