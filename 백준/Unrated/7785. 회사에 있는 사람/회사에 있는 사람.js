const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/\r/g, "").split("\n").map(el => el.split(" "));
let testcase = +input.shift();
let company = new Map(input.map(el => [el[0], el[1]]));
let result = [];
for (let key of company.keys()) {
    if (company.get(key) === "enter") result.push(key);
}
result.sort().reverse();
console.log(result.join('\n'));