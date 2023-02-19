const input = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    if (n < 2) {
        return n;
    }
    return factorial(n - 1) * n;
}

console.log(factorial(input));