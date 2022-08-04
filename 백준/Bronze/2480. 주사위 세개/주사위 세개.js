const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

function dicemoney(a, b, c) {
    if (a === b && a === c && b === c) {
        return console.log(10000 + 1000 * a);
    } else if (a === b || a === c || b === c) {
        if (a === b || a === c) {
            return console.log(1000 + 100 * a);
        } else if (b === c) {
            return console.log(1000 + 100 * b);
        }
    } else {
        let arr = [];
        arr.push(a, b, c);
        console.log(Number(arr.sort().pop() * 100));
    }
}
dicemoney(a, b, c)