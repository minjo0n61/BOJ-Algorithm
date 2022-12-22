const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/(?:\r)/g, "").trim().split("\n").map(el => el.split(" "));
let testcase = +input.shift();

input.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
})

console.log(input.join("\n").replace(/(?:,)/g, " "));