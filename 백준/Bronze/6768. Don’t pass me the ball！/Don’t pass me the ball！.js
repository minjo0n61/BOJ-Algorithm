const input = +require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(parseInt((input-3)*(input-2)*(input-1)/6))