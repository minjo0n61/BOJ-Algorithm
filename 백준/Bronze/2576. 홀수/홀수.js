const input = require('fs').readFileSync('/dev/stdin').toString().trim()
                .split('\n').map(Number);

const solution = input => {
  let odd = [];
  input.forEach(el => {
    if(el % 2 === 1){
      odd.push(el);
    }
  })
  return odd.length === 0 ? 
    -1 : odd.reduce((a,b)=>a+b,0) + '\n' + Math.min(...odd);
}

console.log(solution(input));