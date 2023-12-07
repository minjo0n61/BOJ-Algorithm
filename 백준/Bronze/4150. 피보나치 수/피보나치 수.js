const input = require('fs').readFileSync(process.platform === "linux"?"/dev/stdin":'./input.txt').toString().split('\n');

let count = Number(input[0]);

let fibonacci = [0,1];

let sum = 0;

for (let i = 1 ; i <= count ; i++){
    sum = BigInt(fibonacci[0])+BigInt(fibonacci[1])
    fibonacci.shift();
    fibonacci.push(sum)
}

console.log(fibonacci[0].toString());