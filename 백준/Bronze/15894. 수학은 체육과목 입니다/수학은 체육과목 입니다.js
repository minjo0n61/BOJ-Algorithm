const num = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
let result = 4 * num;
console.log(result);

//1 = 4
//2 = 1+(1/2)*1*2+2+2*2 = 8
//3 = 1+(1/2)*2*2+3+3*2 = 12