const input = require('fs').readFileSync('./dev/stdin').toString().trim().split(' ').map(Number);
let [A,B,C,X,Y] = input;
let answer = 1000000000; 
let max = Math.max(X,Y);


for(let i = 0; i<=max; i++){
  let YN = X-i <0 ? 0 : X-i;
  let FR = Y-i <0 ? 0 : Y-i;
  let price = i*C*2 + A * YN + B * FR;
  if(price<answer) answer = price;
}
console.log(answer);