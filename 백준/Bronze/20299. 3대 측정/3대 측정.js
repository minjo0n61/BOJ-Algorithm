const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\n');

const [N, K, L] = input[0].split(' ').map(Number);
let validTeams = 0;
let validMembers = [];

for (let i = 1; i <= N; i++) {
    const [x1, x2, x3] = input[i].split(' ').map(Number);
    
    if (x1 >= L && x2 >= L && x3 >= L && x1 + x2 + x3 >= K) {
        validTeams++;
        validMembers.push(x1, x2, x3);
    }
}

console.log(validTeams);
console.log(validMembers.join(' '));