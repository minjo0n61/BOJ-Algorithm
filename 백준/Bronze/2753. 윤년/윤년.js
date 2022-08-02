const fs=require('fs');
const input=fs.readFileSync("/dev/stdin").toString();

const A=parseInt(input)

if ((A%4===0 && A%100 !==0) || A%400===0){
    return console.log(1);
}
else{
    return console.log(0);
}