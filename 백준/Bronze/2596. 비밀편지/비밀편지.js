const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const char = {
    '000000': 'A',
    '001111': 'B',
    '010011': 'C',
    '011100': 'D',
    '100110': 'E',
    '101001': 'F',
    '110101': 'G',
    '111010': 'H',
} 

let arr = []

for(let i = 0; i < Number(input[0]); i++) {
    arr.push(input[1].substring(i * 6, (i + 1) * 6))
}

let str = ""

for(let i = 0; i < arr.length; i++) {
    let c = char[arr[i]]

    if(!c) { 
        let result = findChar(arr[i])

        if(result === 'error') {
            return console.log(i + 1)
        } else {
            str += result
        }

    } else { 
        str += c
    }
}

function findChar (c) {
    let cKeys = Object.keys(char)

    for(let i = 0; i < cKeys.length; i++) {
        let cnt = 0

        for(let j = 0; j < cKeys[i].length; j++) {
            if(cKeys[i][j] !== c[j]) cnt++
        }
        
        if(cnt === 1) {
            return char[cKeys[i]]
        }
    }

    return 'error' 
}

console.log(str);