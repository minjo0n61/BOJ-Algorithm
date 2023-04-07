const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().replace(/\r/g, "").split("\n").map(el => el.split(" "));
let testcase = input.shift();
let year = [];
let month = [];
let day = [];
let [max, maxcount, min, mincount] = [3000, 0, 0, 0]
for (let i = 0; i < testcase; i++) {
    year.push(+input[i][3]);
    month.push(+input[i][2]);
    day.push(+input[i][1]);
}
for (let i = 0; i < testcase; i++) {
    if (year[i] < max) {
        max = year[i];
        maxcount = i;
    } else if (year[i] === max) {
        if (month[i] < month[maxcount]) {
            max = year[i];
            maxcount = i;
        } else if (month[i] === month[maxcount]) {
            if (day[i] < day[maxcount]) {
                max = year[i];
                maxcount = i;
            }
        }
    }
    if (year[i] > min) {
        min = year[i];
        mincount = i;
    } else if (year[i] === min) {
        if (month[i] > month[mincount]) {
            min = year[i];
            mincount = i;
        } else if (month[i] === month[mincount]) {
            if (day[i] > day[mincount]) {
                min = year[i];
                mincount = i;
            }
        }
    }
}
console.log(input[mincount][0]);
console.log(input[maxcount][0]);