const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(x => +x);

let bread = Math.floor(input[0] / 2);
let answer = Math.min(bread, input[1]);
console.log(answer);