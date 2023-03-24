const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let chicken = input[0];
let [coke, beer] = input[1];
let answer = beer + Math.floor(coke / 2) > chicken[0] ? chicken[0] : beer + Math.floor(coke / 2);

console.log(answer);