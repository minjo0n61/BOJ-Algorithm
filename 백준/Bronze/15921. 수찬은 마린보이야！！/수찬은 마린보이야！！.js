const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let testcase = input.shift();
marinboy();


function marinboy() {
    if (input.length === 0) {
        return console.log("divide by zero");
    }
    let S = new Map();
    input[0].forEach(el => {
        if (S.has(el)) {
            S.set(el, S.get(el) + 1);
        }
        else {
            S.set(el, 1);
        }
    });
    let arr = S.entries();
    let num = [];
    for (let [key, value] of arr) {
        num.push([key, value]);
    }
    let sum = 0;
    let gidae = 0;
    num.forEach(el => {
        sum += el[0] * el[1];
        gidae += el[0] * el[1] / testcase;
    })
    if (gidae === 0) {
        return console.log("divide by zero");
    }
    let average = sum / testcase;
    console.log((average / gidae).toFixed(2));
}