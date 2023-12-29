const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(el => +el);

let people = new Array(input[0]).fill(1).map((el, i) => el + i);
let result = [];
josephus(input[1]);
console.log(`<${result.join(", ")}>`);

function josephus(num) {
    let count = 1;
    while (people.length > 0) {
        let shiftNum = people.shift();
        if (count % num === 0) {
            result.push(shiftNum);
        } else {
            people.push(shiftNum);
        }
        count++;
    }
}