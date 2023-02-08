const input = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
let count = 0;
let N = input;
let board = new Array(input + 1).fill(0);

function NQueen(num) {
    if (num === N) {
        count++;
        return;
    }
    for (let i = 0; i < N; i++) {
        board[num] = i;
        if (promising(num)) {
            NQueen(num + 1);
        }
    }
}

function promising(num) {
    for (let i = 0; i < num; i++) {
        if (board[num] === board[i] || num - i === Math.abs(board[num] - board[i])) {
            return 0;
        }
    }
    return 1;
}

NQueen(0);
console.log(count);