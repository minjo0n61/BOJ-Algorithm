const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);
let [N, W, H, L] = input;
console.log(Math.min(parseInt(W / L) * parseInt(H / L), N));