const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n").map(el => el.split(" ").map(Number));
let N = input.shift()[0];
let arr = Array(N).fill().map(el => Array(N).fill(0));

function dfs(node, start, visited) {
    for (let i = 0; i < N; i++) {
        if (input[node][i] && (visited[i] === false)) {
            visited[i] = true;
            arr[start][i] = 1;
            dfs(i, start, visited);
        }
    }
}

for (let i = 0; i < N; i++) {
    let visited = Array(N).fill(false);
    dfs(i, i, visited);
}

console.log(arr.map(el => el.join(" ")).join("\n"));