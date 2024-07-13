const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const dic = {
    '.': '.',
    'O': 'O',
    '-': '|',
    '|': '-',
    '/': '\\',
    '\\': '/',
    '^': '<',
    '<': 'v',
    'v': '>',
    '>': '^'
};

const [N, M] = input[0].split(' ').map(Number);
const arr = Array.from({ length: N }, () => Array(M).fill(''));

for (let i = 1; i <= N; i++) {
    const line = input[i].split('');
    for (let j = 0; j < M; j++) {
        arr[i - 1][j] = dic[line[j]];
    }
}

let result = '';
for (let x = M - 1; x >= 0; x--) {
    for (let y = 0; y < N; y++) {
        result += arr[y][x];
    }
    result += '\n';
}
console.log(result.trim());
