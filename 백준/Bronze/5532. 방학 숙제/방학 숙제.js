const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

function vacation(arr) {
    let vacday = arr[0];
    let mathtotal = arr[1];
    let koreantotal = arr[2];
    let mathdo = arr[3];
    let koreando = arr[4];

    if (mathtotal / mathdo > koreantotal / koreando) {
        console.log(vacday - Math.ceil(mathtotal / mathdo))
    } else {
        console.log(vacday - Math.ceil(koreantotal / koreando))
    }
}

vacation(input)