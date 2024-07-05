const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input) - 1;

const li = ["baby", "sukhwan", "tururu", "turu", "very", "cute", "tururu", 
            "turu", "in", "bed", "tururu", "turu", "baby", "sukhwan"];

const k = Math.floor(N / 14);
const position = N % 14;

if ([3, 7, 11].includes(position)) {
    if (k >= 4) {
        console.log(`tu+ru*${k + 1}`);
    } else {
        console.log("turu" + "ru".repeat(k));
    }
} else if ([2, 6, 10].includes(position)) {
    if (k >= 3) {
        console.log(`tu+ru*${k + 2}`);
    } else {
        console.log("tururu" + "ru".repeat(k));
    }
} else {
    console.log(li[position]);
}
