const input = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
for (let i = 1; i <= input; i++) {
    if (i === 1) {
        console.log(' '.repeat(input - i) + '*');
    } else if (i !== input) {
        console.log(' '.repeat(input - i) + '*' + ' '.repeat(2 * (i - 1) - 1) + '*');
    } else {
        console.log('*'.repeat(2 * i - 1));
    }
}