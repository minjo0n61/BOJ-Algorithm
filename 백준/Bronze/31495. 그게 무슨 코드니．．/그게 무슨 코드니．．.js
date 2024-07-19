const input = require('fs').readFileSync(process.platform === "linux"?"/dev/stdin":"./input.txt").toString().trim();

let result = 'CE';

if (input.startsWith('"') && input.endsWith('"')) {
    const innerStr = input.slice(1, -1);
    
    if (innerStr.length > 0) {
        result = innerStr;
    }
}

console.log(result);