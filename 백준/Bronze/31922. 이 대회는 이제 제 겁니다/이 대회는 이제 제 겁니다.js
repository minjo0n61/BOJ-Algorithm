const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt", "utf8").trim().split(" ");

const A = parseInt(input[0]);
const P = parseInt(input[1]);
const C = parseInt(input[2]);

const prizeDivision1AndShake = A + C;
const prizeDivision2 = P;

const maxPrize = Math.max(prizeDivision1AndShake, prizeDivision2);

console.log(maxPrize);