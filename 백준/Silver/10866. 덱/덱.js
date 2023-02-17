const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().replace(/\r/g, "").split(/\n/).map(el => el.split(" "));
let testcase = input.shift();
let deque = [];
let answer = '';
for (let i = 0; i < testcase; i++) {
    switch (input[i][0]) {
        case 'push_front': deque.unshift(+input[i][1]); break;
        case 'push_back': deque.push(+input[i][1]); break;
        case 'pop_front':
            if (deque.length === 0) {
                answer += '-1\n';
            } else {
                answer += deque.shift() + "\n";
            }
            break;
        case 'pop_back':
            if (deque.length === 0) {
                answer += '-1\n';
            } else {
                answer += deque.pop() + "\n";
            };
            break;
        case 'size': answer += deque.length + "\n"; break;
        case 'empty': answer += deque.length === 0 ? '1\n' : '0\n'; break;
        case 'front':
            if (deque.length === 0) {
                answer += '-1\n';
            } else {
                answer += deque[0] + "\n";
            }
            break;
        case 'back':
            if (deque.length === 0) {
                answer += '-1\n';
            } else {
                answer += deque[deque.length - 1] + "\n";
            }
            break;
    }
}
console.log(answer.trim());