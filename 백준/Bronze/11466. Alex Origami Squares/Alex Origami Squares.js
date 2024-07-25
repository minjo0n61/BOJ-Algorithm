const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(' ');

const [h, w] = input.map(Number);

function findMaxSquareSize(h, w) {
    let left = 0;
    let right = Math.min(h, w);
    
    while (right - left > 1e-6) {
        let mid = (left + right) / 2;
        
        let horizontalCount = Math.floor(w / mid);
        let verticalCount = Math.floor(h / mid);
        
        if (horizontalCount * verticalCount >= 3) {
            left = mid;
        } else {
            right = mid;
        }
    }
    
    return left;
}

const result = findMaxSquareSize(h, w);
console.log(result.toFixed(3));