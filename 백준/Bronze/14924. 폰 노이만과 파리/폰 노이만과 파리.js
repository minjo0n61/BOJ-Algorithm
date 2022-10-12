const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);

//거리가 d/s*2 = 시간 >> 시간*t는 f
let time = input[2] / (input[0] * 2);

console.log(time * input[1]);