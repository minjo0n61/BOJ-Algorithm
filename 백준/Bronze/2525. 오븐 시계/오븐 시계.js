const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const time = input[0].split(" ");
let origin_h = Number(time[0]);
let origin_m = Number(time[1]);
let cook_time = Number(input[1]);

let end_h = Math.trunc((origin_h * 60 + origin_m + cook_time) / 60);
let end_m = (origin_h * 60 + origin_m + cook_time) % 60;

console.log(end_h % 24 + " " + end_m);