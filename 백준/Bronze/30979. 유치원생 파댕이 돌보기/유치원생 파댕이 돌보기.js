const fs = require("fs");
const [T, N, F] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = parseInt(T);
const f = F.split(" ").map(Number);

if (t <= f.reduce((acc, curr) => acc + curr, 0)) {
    console.log("Padaeng_i Happy");
} else {
    console.log("Padaeng_i Cry");
}
