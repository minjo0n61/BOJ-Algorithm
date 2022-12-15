const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, "").trim().split("\n");
let [group, testcase] = input.shift().split(" ").map(Number);
let doogam = input.slice(0, group);
let question = input.slice(group);
let answer = [];

let doogamMap = new Map(doogam.map((value, key) => [value, key + 1]));
question.forEach(el => {
    if (isNaN(el)) {
        answer.push(doogamMap.get(el));
    } else {
        answer.push(doogam[el - 1]);
    }
})
console.log(answer.join("\n"));