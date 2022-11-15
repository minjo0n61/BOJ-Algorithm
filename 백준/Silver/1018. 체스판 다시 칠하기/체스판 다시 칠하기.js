const input = require('fs').readFileSync(process.platform === "linux"?"/dev/stdin":"./input.txt").toString().trim().split("\n");
[size,...arr]= input;
[row, col]= size.split(" ").map(Number);
arr = arr.map(el => el.trim().split(""));

const answer =[];
const line =["WBWBWBWB","BWBWBWBW"]

for(let i=0 ; i<=row-8; i++){
    for(let j=0; j<=col-8; j++){
        
        for(let k=0; k<line.length; k++){
            let count =0;
            
            for(let x=0; x<8; x++){
                for(let y=0; y<8; y++){
                    const current = arr[i+x][j+y];
                    if(current !== line[(x+k)%2][y]){
                        count++;
                    }
                }
            }
            answer.push(count);
        }
    }
}
console.log(Math.min(...answer));