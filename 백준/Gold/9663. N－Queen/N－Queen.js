const input = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
let N = input;
let count = 0;
let cheak = new Array(N).fill(0);

function NQueen(num) {
    if (num === N) {
        return count++;
    }
    for (let i = 0; i < N; i++) {
        cheak[num] = i;
        if (condition(num)) {
            NQueen(num + 1);
        }
    }
}

function condition(num) {
    for (let i = 0; i < num; i++) {
        if (cheak[num] === cheak[i] || num - i === Math.abs(cheak[num] - cheak[i])) {
            return 0;
        }
    }
    return 1;
}

NQueen(0);
console.log(count);