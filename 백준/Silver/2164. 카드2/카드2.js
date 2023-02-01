const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
let num = +input;
class Queue {
    constructor() {
        this.arr = [];
        for (let i = 0; i < num; i++) {
            this.arr.push(i + 1)
        }
        this.head = 0;
        this.tail = num - 1;
    }
    size() {
        // if (this.head === this.tail) {
        //     return 0;
        // } else {
        return this.tail - this.head + 1;
        // }
    }
    add(value) {
        this.tail += 1;
        this.arr[this.tail] = value;
    }
    popleft() {
        let temp;
        temp = this.arr[this.head];
        delete this.arr[this.head];
        this.head += 1;
        return temp;
    }
}
let myQueue = new Queue();
// console.log(myQueue)
for (let i = 0; i < num; i++) {
    if (myQueue.size() === 1) {
        myQueue.arr.filter((el) => {
            console.log(el);
        })
        break;
    }
    // console.log(myQueue)
    myQueue.popleft();
    if (myQueue.size() === 1) {
        myQueue.arr.filter((el) => {
            console.log(el);
        })
        break;
    }
    // console.log(myQueue)
    myQueue.add(myQueue.popleft());
    if (myQueue.size() === 1) {
        myQueue.arr.filter((el) => {
            console.log(el);
        })
        break;
    }

}