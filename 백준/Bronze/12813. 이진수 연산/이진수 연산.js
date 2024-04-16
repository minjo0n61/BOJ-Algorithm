const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const A = input[0];
const B = input[1];
const N = A.length;

const andResult = [];
const orResult = [];
const xorResult = [];
const notAResult = [];
const notBResult = [];

for (let i = 0; i < N; i++) {
    const aBit = A[i] === '1';
    const bBit = B[i] === '1';

    andResult.push(aBit && bBit ? '1' : '0');
    orResult.push(aBit || bBit ? '1' : '0');
    xorResult.push(aBit !== bBit ? '1' : '0');
    notAResult.push(aBit ? '0' : '1');
    notBResult.push(bBit ? '0' : '1');
}

console.log(andResult.join(''));
console.log(orResult.join(''));
console.log(xorResult.join(''));
console.log(notAResult.join(''));
console.log(notBResult.join(''));
