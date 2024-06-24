const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = parseInt(input, 10);

if (n === 0) {
    console.log(1);
} else {
    let binaryStr = '';
    if (n > 0) {
        binaryStr = n.toString(2);
    } else {
        binaryStr = (n >>> 0).toString(2);
    }
    console.log(binaryStr.length);
}
