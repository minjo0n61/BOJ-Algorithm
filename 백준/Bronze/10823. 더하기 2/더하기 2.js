const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(/\n/);
let str = input.join("");
console.log(str.split(",").map(Number).reduce((pv, cv) => pv + cv, 0));