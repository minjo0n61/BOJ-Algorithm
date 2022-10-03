const input = require('fs').readFileSync('/dev/stdin');

for (let i = 1; i <= +input; i++) {
    console.log("*".repeat(i));
}
for (let i = +input - 1; i > 0; i--) {
    console.log("*".repeat(i));
}