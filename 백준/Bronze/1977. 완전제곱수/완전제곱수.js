const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const m = parseInt(input[0]);
const n = parseInt(input[1]);
const arr = [];

for (let i=Math.ceil(Math.sqrt(m)); i<= Math.floor(Math.sqrt(n)); i++) arr.push(i**2);

if (arr.length) {
    console.log(arr.reduce((acc, i) => acc + i, 0));
    console.log(arr[0]);
} else console.log(-1);