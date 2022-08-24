const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);


function triangle(n) {
    let sum = 0;
    sum = n[0] + n[1] + n[2];

    if (n[0] === 60 && n[1] === 60 && n[2] === 60) {
        return "Equilateral";
    }
    if (sum === 180 && (n[0] === n[1] || n[1] === n[2] || n[0] === n[2])) {
        return "Isosceles";
    }
    if (sum === 180 && (n[0] !== n[1] && n[1] !== n[2] && n[0] !== n[2])) {
        return "Scalene";
    }
    if (sum !== 180) {
        return "Error";
    }

}

console.log(triangle(input));