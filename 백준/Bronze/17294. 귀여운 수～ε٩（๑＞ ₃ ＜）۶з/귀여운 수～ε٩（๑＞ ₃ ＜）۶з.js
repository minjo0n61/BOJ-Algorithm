const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function isCuteNumber(number) {
    if (number.length < 2) return true;

    let diff = number[1] - number[0];
    for (let i = 1; i < number.length - 1; i++) {
        if ((number[i + 1] - number[i]) !== diff) {
            return false;
        }
    }
    return true;
}

if (isCuteNumber(input)) {
    console.log("◝(⑅•ᴗ•⑅)◜..°♡ 뀌요미!!");
} else {
    console.log("흥칫뿡!! <(￣ ﹌ ￣)>");
}
