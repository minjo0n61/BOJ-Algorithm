const input = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
let count = 0;
let num = 665;
while (true) {
    num++;
    if (num.toString().includes('666')) {
        count++;
    }
    if (count === input) {
        console.log(num);
        break;
    }
}