const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .split('\n');
let testcase = +input.shift();

for (let i = 0; i < testcase; i++) {
    if (input[i].includes('S')) {
        console.log(input[i]);
        break;
    }
}
