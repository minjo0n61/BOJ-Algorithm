let [N, s, arr, M, q] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
s = s.split(' ').map(Number);
arr = arr.split(' ').map(Number);
q = q.split(' ').map(Number);
res = [];
let index = N-1;
let i = 0;
while(res.length < M) {
    if(index >= 0) {
        if(s[index] == 0) res.push(arr[index]);
        index -= 1;
    }
    else {
        res.push(q[i])
        i += 1;
    }
}
console.log(res.join(' '))