const input = require('fs').readFileSync('/dev/stdin');

for (let i = input; i > 1; i--) {
    console.log(" ".repeat(input - i) + "*".repeat(i * 2 - 1))
}
for (let i = 1; i <= input; i++) {
    console.log(" ".repeat(input - i) + "*".repeat(i * 2 - 1))
}