let [N, ...arr] = (require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'))
let x = new Array(N);
arr.map((el,idx) => x[idx] = el.split(' ').map(Number));
x.sort((a, b) => {
    if (a[1] == b[1]) return a[0] - b[0];
    else return a[1] - b[1];
});
let ans = 0;
let end = 0;
x.map((el) => {
    if(el[0] >= end) {
        ans += 1;
        end = el[1];
    }
})

console.log(ans)