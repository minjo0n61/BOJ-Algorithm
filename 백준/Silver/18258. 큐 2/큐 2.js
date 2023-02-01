const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" "));

class Queue {
    constructor() {
        this.storage = [];
        this.front = 0;
        this.rear = 0;
    }
    size() {
        if (this.storage[this.rear] === undefined) {
            return 0;
        } else {
            return this.rear - this.front + 1;
        }
    }
    empty() {
        if (this.size() === 0) {
            return 1;
        } else {
            return 0;
        }
    }
    first() {
        if (this.size() === 0) {
            return -1;
        } else {
            return this.storage[this.front];
        }
    }
    back() {
        if (this.size() === 0) {
            return -1;
        } else {
            return this.storage[this.rear];
        }
    }
    add(value) {
        if (this.size() === 0) {
            this.storage['0'] = value;
        } else {
            this.rear += 1;
            this.storage[this.rear] = value;
        }
    }
    popleft() {
        let temp;
        if (this.front === this.rear) {
            temp = this.storage[this.front];
            delete this.storage[this.front];
            this.front = 0;
            this.rear = 0;
        } else {
            temp = this.storage[this.front];
            delete this.storage[this.front];
            this.front += 1;
        }
        if (temp === undefined) {
            return -1;
        }
        return temp;
    }

}

let testcase = +input.shift();
const que = new Queue();
const answer = [];

for (let i = 0; i < testcase; i++) {
    let order = input[i][0];
    switch (order) {
        case 'push': que.add(input[i][1]); break;
        case 'pop': answer.push(que.popleft()); break;
        case 'size': answer.push(que.size()); break;
        case 'empty': answer.push(que.empty()); break;
        case 'front': answer.push(que.first()); break;
        case 'back': answer.push(que.back()); break;
    }
}
console.log(answer.join("\n"));