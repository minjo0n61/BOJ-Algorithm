const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const n = parseFloat(input[0]);
const m = parseFloat(input[1]);
const k = parseFloat(input[2]);

const result = (n * k) / m;

console.log(result.toFixed(7));
