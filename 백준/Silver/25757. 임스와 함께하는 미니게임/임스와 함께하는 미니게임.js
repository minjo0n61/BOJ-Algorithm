const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, gameType] = input[0].split(' ');
const people = input.slice(1);

const uniquePeople = new Set(people);

let requiredPlayers = 0;
if (gameType === 'Y') {
  requiredPlayers = 1;
} else if (gameType === 'F') {
  requiredPlayers = 2;
} else if (gameType === 'O') {
  requiredPlayers = 3;
}

const maxGames = Math.floor(uniquePeople.size / requiredPlayers);

console.log(maxGames);
