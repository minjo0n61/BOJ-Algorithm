const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const testcase = Number(input[0]);
let line = input[1].split(" ").map(Number);

if(testcase === 1){
    console.log(line[0]*line[0]);
}else{
    console.log(Math.max(...line) * Math.min(...line));
}