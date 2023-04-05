const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().split("\n").map(el => el.split(" ").map(Number));
let [N, M] = input.shift();
let mainArr = new Array(N).fill().map((arr, i) => { return i + 1 });

for (let i = 0; i < M; i++) {
    reverseFunc(input[i][0], input[i][1])
}
console.log(mainArr.join(" "));

function reverseFunc(a, b) {
    let arr = mainArr.splice(a, b - a);
    let reverseArr = [];
    for (let i = 0; i < arr.length; i++) {
        reverseArr.push(arr[arr.length - i - 1])
    }
    mainArr.splice(a - 1, 0, ...reverseArr);
}