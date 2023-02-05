const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);

function perfectNum(num) {
    let arr = [];
    let myNum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }

    myNum = arr.reduce((pv, cv) => pv + cv, 0);
    if (myNum === num) {
        return console.log(`${num} = ${arr.join(" + ")}`);
    } else {
        return console.log(`${num} is NOT perfect.`);
    }
}
for (let i = 0; i < input.length - 1; i++) {
    perfectNum(input[i]);
}