const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(el => +el);

let [a, b, c, d, e, f] = input;

for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
        if (a * x + b * y === c && d * x + e * y === f) {
            console.log(x, y);
            break;
        }
    }
}