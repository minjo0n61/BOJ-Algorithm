let input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let alphabet of croatia) {
    input = input.split(alphabet).join("A");
}
console.log(input.length);