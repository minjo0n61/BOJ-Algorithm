const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("");
let group = [];
for (let i = 0; i < input.length; i++) {
    let str = input[i];
    for (let j = i; j < input.length; j++) {
        if (i !== j) {
            str = str.concat(input[j]);
        }
        group.push(str);
    }
}
let groupSet = new Set(group);
console.log(groupSet.size);