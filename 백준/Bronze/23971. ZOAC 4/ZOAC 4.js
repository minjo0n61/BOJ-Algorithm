const input = require('fs').readFileSync(process.platform === "linux"?"/dev/stdin":"./input.txt").toString().split(" ");
let seat = 0;

seat+= Math.ceil(input[0] / (parseInt(input[2])+1)) ;
seat*= Math.ceil(input[1] / (parseInt(input[3])+1)) ;

console.log(seat);