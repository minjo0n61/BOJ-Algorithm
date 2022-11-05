let input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let el of croatia) {
    input = input.split(el).join("A");
}
console.log(input.length);