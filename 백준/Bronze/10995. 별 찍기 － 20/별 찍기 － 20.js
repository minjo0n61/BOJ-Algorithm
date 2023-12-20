const input = +require('fs').readFileSync(process.platform === "linux"?"/dev/stdin":"./input.txt").toString().trim();

for(let i=1; i<=input; i++){
  let str = '';
  if(i%2===0){
    str += ' ';
  }
  for(let j=0; j<input; j++){
    str+="* "
  }
  console.log(str);
}