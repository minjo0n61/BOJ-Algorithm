const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().split(" ").map(Number);
let N = input.shift();//여
let M = input.shift();//남
let K = input.shift();//인턴쉽 참가 인원
let count = 0;
while (true) {
    if (N < 2 || M < 1 || (N + M - 3) < K) {
        break;
    }
    N -= 2;
    M -= 1;
    count++;
}
console.log(count);