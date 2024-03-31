const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
const N = parseInt(input[0], 10);
let stst = input[1];
let lst = stst.split('').reverse();

while (true) {
    if (lst.filter(x => x === 's').length === lst.filter(x => x === 't').length) {
        break;
    } else {
        lst.pop();
    }
}

lst.reverse();
console.log(lst.join(''));
