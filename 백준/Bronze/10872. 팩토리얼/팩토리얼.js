const input = require('fs').readFileSync('/dev/stdin').toString();
let fac = Number(input);
let multi = 1;

if (fac === 0) { console.log(1); }
else {
    for (let i = 1; i <= fac; i++) {
        multi *= i;
    }
    console.log(multi);
}