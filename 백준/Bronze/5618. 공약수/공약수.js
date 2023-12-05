const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map((el) => +el));
const n = input[0][0];
const num = input[1].sort((a, b) => a - b);
let result = [];

function solution(n, num) {
    let arrs = [];
    for (let i = 0; i < n; i++) {
        let arr = new Array();
        for (let j = 1; j <= num[i]; j++) {
            if (num[i] % j === 0) {
                arr.push(j);
            }
        }
        arrs.push(arr);
    }
    result = arrs[0];

    for (let i = 0; i < arrs.length - 1; i++) {
        let temp = arrs[i].filter((el) => arrs[i + 1].includes(el));
        result = result.filter((el) => temp.includes(el));
    }
}
solution(n, num);

console.log(result.join('\n'));