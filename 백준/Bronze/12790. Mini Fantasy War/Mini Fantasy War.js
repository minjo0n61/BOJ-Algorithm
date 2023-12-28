const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map((el) => +el));

for (let i = 1; i <= input[0]; i++) {
    power(input[i]);
}

function power([hp, mp, attack, defence, hpItem, mpItem, attackItem, defenceItem]) {
    let total = [hp + hpItem, mp + mpItem, attack + attackItem, defence + defenceItem];
    if (total[0] < 1) {
        total[0] = 1;
    }
    if (total[1] < 1) {
        total[1] = 1;
    }
    if (total[2] < 0) {
        total[2] = 0;
    }
    return console.log(total[0] * 1 + 5 * total[1] + 2 * total[2] + 2 * total[3]);
}
