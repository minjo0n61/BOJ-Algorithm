const input = +require('fs').readFileSync(process.platform === "linux"?"/dev/stdin":"./input.txt").toString();
let answer ="";
for(let i=0; i<input; i++){
    answer+= "SciComLove"+"\n";
}
console.log(answer.trim());