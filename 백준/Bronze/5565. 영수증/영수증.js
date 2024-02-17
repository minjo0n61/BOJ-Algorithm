const input=require('fs').readFileSync(0).toString().split('\n');
let sum=parseInt(input[0])
for(i=1;i<=9;i++){
    let a=parseInt(input[i])
    sum-=a
}
console.log(sum)