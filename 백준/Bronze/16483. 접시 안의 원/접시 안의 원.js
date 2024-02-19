const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

console.log(Math.round((input/2)**2));