const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("/").map(Number);

function gosu(arr) {
    if (arr[0] + arr[2] < arr[1] || arr[1] === 0) {
        console.log("hasu");
    } else {
        console.log("gosu");
    }
}
gosu(input);