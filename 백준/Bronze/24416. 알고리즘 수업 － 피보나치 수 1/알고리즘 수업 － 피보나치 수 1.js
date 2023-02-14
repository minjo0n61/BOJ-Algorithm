const input = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
let f = new Array(input).fill(0);
let count1 = 1;
let count2 = 0;
fib1(input);
fib2(input);
console.log(count1, count2);

function fib1(n) {
    if (n === 1 || n === 2) {
        return 1;
    } else {
        count1++;
        return fib1(n - 1) + fib1(n - 2);
    }
}

function fib2(n) {
    if (f[n - 1] !== 0) {
        return f[n - 1];
    } else {
        if (n === 1 || n === 2) {
            f[n - 1] = 1;
        } else {
            count2++;
            f[n - 1] = fib2(n - 1) + fib2(n - 2);
        }
        return f[n - 1];
    }
}