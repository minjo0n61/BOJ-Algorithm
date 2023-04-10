const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().split("\n");

const a = input[0].split(' ').map(Number);
const c = input[1].split(' ').map(Number);

const bx = c[0] - a[2];
const by = parseInt(c[1] / a[1]);
const bz = c[2] - a[0];

console.log(bx, by, bz);