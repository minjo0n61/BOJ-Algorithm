const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const N = parseInt(input[0], 10);
const K = input[1];

let count = 0;

for (let hour = 0; hour <= N; hour++) {
    for (let minute = 0; minute < 60; minute++) {
        for (let second = 0; second < 60; second++) {
            const time = `${hour}`.padStart(2, '0') + 
                         `${minute}`.padStart(2, '0') + 
                         `${second}`.padStart(2, '0');
            if (time.includes(K)) {
                count++;
            }
        }
    }
}

console.log(count);
