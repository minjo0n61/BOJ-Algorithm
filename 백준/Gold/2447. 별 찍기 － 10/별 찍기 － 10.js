let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim())
let ans = new Array(N)
for(let i = 0; i<N; i++) {
    ans[i] = new Array(N).fill(' ');
}

const dot = (n,x,y) => {
    if(n/3 > 1) {
        for(let i = 0; i<3; i++) {
            for(let j = 0; j < 3; j++) {
                if(i == 1 && j == 1) continue
                dot(n/3, x + i*(n/3),y + j*(n/3));
            }
        }
    }
    else {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(i == 1 && j == 1) continue
                ans[x+i][y+j] ='*';
            }
        }
    }
}
dot(N, 0, 0)
let res = '';
for(let i = 0; i<N; i++) {
    res += ans[i].join('')
    res += '\n';
}
console.log(res)