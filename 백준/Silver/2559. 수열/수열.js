const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, "").trim().split("\n").map(el => el.split(" ").map(Number));
let [n, k] = input.shift();
let arrA = input.shift();
let S = new Array(n);
let arrK = [];
for (let i = 0; i < n; i++) {
    if (i === 0) {
        S[i] = arrA[i];
    }
    else {
        S[i] = S[i - 1] + arrA[i];
    }
}

for (let i = 0; i < n - (k - 1); i++) {
    if (i === 0) {
        arrK.push(S[k - 1]);
    } else {
        arrK.push(S[k - 1 + i] - S[i - 1]);
    }
}
arrK.sort((a, b) => a - b);
console.log(arrK.pop());