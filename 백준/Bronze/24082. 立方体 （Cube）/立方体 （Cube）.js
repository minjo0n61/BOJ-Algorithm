const input = require('fs').readFileSync('/dev/stdin');
let length = +input;
console.log(length * length * length);