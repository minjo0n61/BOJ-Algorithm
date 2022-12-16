const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let aGroup = input[1];
let bGroup = input[2];
let abSet = new Set([...aGroup, ...bGroup]);
let aGroupSet = new Set(aGroup);

bGroup.forEach(el => {
    if (aGroupSet.has(el)) {
        abSet.delete(el);
    }
})

console.log(abSet.size);