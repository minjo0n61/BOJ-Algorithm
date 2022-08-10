const input = require('fs').readFileSync('/dev/stdin').toString();

for (let i = 0; i < Number(input); i++) {
    console.log(" ".repeat(i) + "*".repeat(Number(input) - i));
}