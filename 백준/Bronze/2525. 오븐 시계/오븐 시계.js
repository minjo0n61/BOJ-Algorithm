const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let time = input[0].split(" ").map(Number);
let cooktime = Number(input[1]);

let endhour = Math.floor((time[0] * 60 + time[1] + cooktime) / 60);
let endminute = (time[0] * 60 + time[1] + cooktime) % 60;

console.log(endhour % 24 + " " + endminute);
