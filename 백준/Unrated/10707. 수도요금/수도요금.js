const input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const [xFee, yBaseRate, yUsage, yFee, P] = input;
const X = xFee * P;
const Y = yUsage < P ? yBaseRate + (yFee * (P - yUsage)) : yBaseRate;

console.log(Math.min(X, Y));