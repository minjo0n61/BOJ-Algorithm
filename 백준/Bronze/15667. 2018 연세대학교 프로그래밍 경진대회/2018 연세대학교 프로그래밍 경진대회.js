const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();

let i = 1;
while (true) {
    if (i+ i * i === input - 1) {
        break;
    }
    i++;
}
console.log(i);
// 1+ 4+4 *4