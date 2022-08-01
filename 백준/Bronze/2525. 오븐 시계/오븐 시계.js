const fs=require('fs');
const input=fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const current = input[0].split(" ");

const ct=parseInt(current[0]);
const cm=parseInt(current[1]);
const cookTime=parseInt(input[1]);

const et=Math.floor((ct*60+cm+cookTime)/60);
const em=(ct*60+cm+cookTime)%60;

console.log(et >= 24 ? et % 24:et, em);