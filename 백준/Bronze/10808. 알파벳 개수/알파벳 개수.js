const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("");
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let num = Array(26).fill(0);
for (let i = 0; i < input.length; i++) {
    num[alphabet.indexOf(input[i])]++;
}
console.log(num.join(" "));