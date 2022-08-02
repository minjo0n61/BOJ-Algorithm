const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

if (A === B && A === C && B === C) { console.log(10000 + 1000 * A) }

if (A !== B || A !== C || B !== C) {
    if (A == B || A == C) { console.log(1000 + 100 * A) }
    if (B === C) { console.log(1000 + 100 * B) }
}

let arr = [A, B, C];
if (A !== B && A !== C && B !== C) {
    const sort = arr.sort();
    console.log(sort.pop() * 100);
}