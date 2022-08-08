const input = require('fs').readFileSync('/dev/stdin').toString();
let testcase = Number(input);

for (let i = testcase; i > 0; i--) {
    console.log("*".repeat(i));
}