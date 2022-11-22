const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/\r/g, "").split("\n").map(Number);
let hap = 0;
let i = 0;
while (true) {
    if (input[i] === -1) {
        break;
    }
    hap += input[i];
    i++;
}
console.log(hap);