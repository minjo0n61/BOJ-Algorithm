const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
console.log(":fan::fan::fan:");
console.log(`:fan::${input}::fan:`);
console.log(":fan::fan::fan:");