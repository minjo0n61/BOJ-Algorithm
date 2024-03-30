const fs = require('fs');
const [firstLine, ...zebras] = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
const [N, L] = firstLine.split(" ").map(Number);

let results = [];

zebras.forEach(zebra => {
    zebra += "0";
    let tmp1 = [];
    let tmp2 = "";
    for (let i = 0; i <= L; i++) {
        if (zebra[i] === "1") {
            tmp2 += "1";
        } else if (tmp2.length > 0) {
            tmp1.push(tmp2);
            tmp2 = "";
        }
    }
    results.push(tmp1.length);
});

const maxStripes = Math.max(...results);
const count = results.filter(x => x === maxStripes).length;

console.log(maxStripes, count);
