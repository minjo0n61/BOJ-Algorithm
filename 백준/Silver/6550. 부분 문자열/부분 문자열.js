const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\n');

function isSubsequence(s, t) {
    let i = 0;
    let j = 0;
    
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    
    return i === s.length;
}

input.forEach(line => {
    const [s, t] = line.split(' ');
    console.log(isSubsequence(s, t) ? 'Yes' : 'No');
});