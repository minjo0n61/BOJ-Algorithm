const input = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();

if (input !== 1) {
    console.log(" ".repeat(input - 1) + '*');
    for (let i = 1; i < input; i++) {
        console.log(" ".repeat(input - 1 - i) + "*" + " ".repeat(2 * i - 1) + "*")
    }
} else {
    console.log("*");
}
