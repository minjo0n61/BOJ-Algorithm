const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("");

const before = ["D", "E", "F", "G", "H", "I", "J", "K", "L", 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "A", "B", "C"];
const after = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let arr = [];
for (let i = 0; i < input.length; i++) {
    arr.push(after[before.indexOf(input[i])]);
}
console.log(arr.join(""));