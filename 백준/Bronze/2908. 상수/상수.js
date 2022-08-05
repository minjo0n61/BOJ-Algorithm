const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
let strNum = '';

for (let i = 0; i < input.length; i++) {

    for (let j = input[i].length - 1; j >= 0; j--) {
        strNum += (input[i])[j]
    }
    strNum += " ";
}

let Num = strNum.split(" ").map(Number);
console.log(Num[0] > Num[1] ? Num[0] : Num[1]);