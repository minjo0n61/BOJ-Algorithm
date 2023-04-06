const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().split("\n").map(el => el.split(" ").map(Number));
let [N, M] = input.shift();
let mainArr = new Array(N).fill().map((arr, i) => { return i + 1 });
for (let i = 0; i < M; i++) {
    reverseFunc(input[i][0], input[i][1], input[i][2])
}
console.log(mainArr.join(" "));

function reverseFunc(a, b, c) {
    let arr = mainArr.splice(a - 1, b - a + 1);
    let reverseArr = [];
    for (let i = c - a; i < arr.length; i++) {
        reverseArr.push(arr[i]);
    }
    for (let i = 0; i < c - a; i++) {
        reverseArr.push(arr[i]);
    }
    mainArr.splice(a - 1, 0, ...reverseArr);
}