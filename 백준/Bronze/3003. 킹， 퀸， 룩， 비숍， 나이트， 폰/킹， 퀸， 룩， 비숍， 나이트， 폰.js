const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
let answer =[];

const arr = [1,1,2,2,2,8]

for (let i =0;i<input.length;i++){
    answer+= Number(arr[i]) - Number(input[i])+" ";
}
console.log(answer.trim());