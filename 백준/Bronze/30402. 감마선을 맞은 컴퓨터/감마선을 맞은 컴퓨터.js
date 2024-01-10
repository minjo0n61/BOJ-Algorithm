const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ");
if (input.includes('w')) {
    console.log('chunbae');
} else if (input.includes('b')) {
    console.log('nabi');
} else {
    console.log('yeongcheol');
}