const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => +el);
let arrW = [];
let arrK = [];
for (let i = 0; i < 10; i++) {
    arrW.push(input.shift());
}
arrK = input;
arrW.sort((a, b) => b - a);
arrK.sort((a, b) => b - a);

let numW = 0;
let numK = 0;
for (let i = 0; i < 3; i++) {
    numW += arrW[i];
    numK += arrK[i];
}
console.log(numW, numK);