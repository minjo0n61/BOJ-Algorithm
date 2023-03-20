let input = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
input++;
while (true) {
    if (sosu(input)) {
        console.log(input);
        break;
    } else {
        input++;
    }
}

function sosu(num) {
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return true;
        }
    }
    return false;
}