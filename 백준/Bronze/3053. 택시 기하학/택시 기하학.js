const input = +require('fs').readFileSync(process.platform === "linux"?"/dev/stdin":"./input.txt").toString().trim();
const PI = Math.PI
 
console.log((PI * input * input).toFixed(6));
console.log((2 * input * input).toFixed(6));