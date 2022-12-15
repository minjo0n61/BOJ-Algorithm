const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let [n, m] = input[0];
let arrA = new Set(input[1]);
let arrB = new Set(input[2]);
let answer = new Set([...arrA, ...arrB]);

arrA.forEach(el => {
    if (arrB.has(el)) {
        answer.delete(el);
    }
})

console.log(answer.size);