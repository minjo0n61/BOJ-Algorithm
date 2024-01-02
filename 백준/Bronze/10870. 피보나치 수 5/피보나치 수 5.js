const input = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();

let arr = [];
Fibonacci(input);
console.log(arr[arr.length - 1]);

function Fibonacci(num) {
    for (let i = 0; i <= num; i++) {
        if (i === 0) {
            arr.push(0);
        } else if (i === 1 || i === 2) {
            arr.push(1);
        } else {
            arr.push(arr[i - 2] + arr[i - 1]);
        }
    }
}