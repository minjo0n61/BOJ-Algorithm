const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let [n, m] = input.shift();
let nn = input.splice(0, n);
let sgroup = [];

for (let i = 0; i < n; i++) {
    let s = new Array(n);
    for (let j = 0; j < n; j++) {
        if (j === 0) {
            s[j] = nn[i][j];
        } else {
            s[j] = s[j - 1] + nn[i][j];
        }
    }
    sgroup.push(s);
}

let answer = [];

function quiz([x1, y1, x2, y2]) {
    let hap = [];
    if (x1 === x2 && y1 === y2) {
        return answer.push(sgroup[x1 - 1][y1 - 1] - (sgroup[x1 - 1][y1 - 2] ?? 0));
    } else {
        for (let i = x1 - 1; i <= x2 - 1; i++) {
            hap.push(sgroup[i][y2 - 1] - (sgroup[i][y1 - 2] ?? 0));
        }
        return answer.push(hap.reduce((pv, cv) => pv + cv, 0));
    }
}
for (let i = 0; i < m; i++) {
    quiz(input[i]);
}
console.log(answer.join("\n"));