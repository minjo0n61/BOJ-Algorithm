const input =require('fs').readFileSync('/dev/stdin').toString().split("");

function dial(input){
    let sum=0;
    for(let i =0; i<input.length;i++){
        if(input[i]==="A"||input[i]==="B"||input[i]==="C"){
            sum+=3;
        }else if(input[i]==="D"||input[i]==="E"||input[i]==="F"){
            sum+=4;
        }else if(input[i]==="G"||input[i]==="H"||input[i]==="I"){
            sum+=5;
        }else if(input[i]==="J"||input[i]==="K"||input[i]==="L"){
            sum+=6;
        }else if(input[i]==="M"||input[i]==="N"||input[i]==="O"){
            sum+=7;
        }else if(input[i]==="P"||input[i]==="Q"||input[i]==="R"||input[i]==="S"){
            sum+=8;
        }else if(input[i]==="T"||input[i]==="U"||input[i]==="V"){
            sum+=9;
        }else if(input[i]==="W"||input[i]==="X"||input[i]==="Y"||input[i]==="Z"){
            sum+=10;
        }
    }
    return sum;
}

console.log(dial(input));