const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
let now = 1;
let AddTime = 1;

for (let i = 1; i <= N; i++) {
    let result = "NO";
    const [S, T] = input[i].split(' ');

    if (S === "HOURGLASS" && now === parseInt(T)) {
        result = "NO";
    }
    else if (S === "HOURGLASS") {
        AddTime *= -1;
    }
    else {
        if (now === parseInt(T)) {
            result = "YES";
        }
    }
    
    console.log(now, result);
    now += AddTime;
    if (now === 13) {
        now = 1;
    }
    if (now === 0) {
        now = 12;
    }
}
