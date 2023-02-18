const input = require('fs').readFileSync(process.platform === "linux"?"/dev/stdin":"./input.txt").toString().trim().split("\n").map(el=>el.split(" ").map(Number));
let floor = +input.shift();

for(let i=1; i<floor; i++){
    for(let j=0; j<input[i].length; j++){
        if(j===0){
            input[i][j] += input[i-1][j];
        }else if(j===input[i].length-1){
            input[i][j] += input[i-1][j-1];
        }else{
            input[i][j] += Math.max(input[i-1][j-1], input[i-1][j]);
        }
    }
}
console.log(Math.max(...input[floor-1]));