const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);

class Queue {
    constructor() {
        this.arr = [];
        for (let i = 0; i < input[0]; i++) {
            this.arr.push(i + 1);
        }
        this.head = 0;
        this.tail = input[0] - 1;
    }
    size() {
        return this.tail - this.head + 1;
    }
    popleft() {
        let temp;
        if (this.head === this.tail) {
            temp = this.arr[this.head];
            delete this.arr[this.head];
            this.head = 0;
            this.tail = 0;
        } else {
            temp = this.arr[this.head];
            delete this.arr[this.head];
            this.head += 1;
        }
        return temp;
    }
    add(value) {
        if (this.size() === 0) {
            this.arr['0'] = value;
        } else {
            this.tail += 1;
            this.arr[this.tail] = value;
        }
    }
}
let answer = [];
let myQueue = new Queue();
for (let i = 0; i < input[0]; i++) {
    for (let j = 0; j < input[1] - 1; j++) {
        myQueue.add(myQueue.popleft());
    }
    answer.push(myQueue.popleft());
}
if (input[1] % 2 === 0) {
    answer.pop();
    answer.push(...myQueue.arr.filter(el => Boolean));
    console.log(`<${answer.join(", ")}>`);
}
else {
    console.log(`<${answer.join(", ")}>`);
}

// 1234567
// 456712 3
// 71245 36
// 4571 362
// 145 3627
// 14 36275
// 4 362751
// 3627514