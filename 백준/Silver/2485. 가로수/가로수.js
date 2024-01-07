const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(Number);
const testcase = input.shift();

let distance = [];
let result = 0;

for (let i = 0; i < testcase - 1; i++) {
    distance.push(input[i + 1] - input[i]);
}

//최대 공약수
function gcd(a, b) {
    if (b == 0) return a
    else return gcd(b, (a % b));
}

let distanceGcd = gcd(distance[0], distance[1]);
for (let i = 2; i < distance.length; i++) {
    distanceGcd = gcd(distanceGcd, distance[i])
}

console.log((input[input.length - 1] - input[0]) / distanceGcd - input.length + 1);