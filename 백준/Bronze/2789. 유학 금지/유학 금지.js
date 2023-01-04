const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
console.log(input.replaceAll(/C|A|M|B|R|I|D|G|E/g, ""));