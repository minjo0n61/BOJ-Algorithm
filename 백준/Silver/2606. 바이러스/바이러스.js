const [node, edge, ...input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((el) => +el));
const visited = Array(node[0] + 1).fill(false);
const graph = Array(node[0] + 1)
  .fill()
  .map((_) => []);
let count = 0;
input.map((el) => {
  graph[el[0]].push(el[1]);
  graph[el[1]].push(el[0]);
});


function dfs(start) {
  let stack = [1];
  //let result = [];
  while (stack.length) {
    let cur = stack.pop();
    if (!visited[cur]) {
      visited[cur] = true;
      count++;
      stack.push(...graph[cur]);
      //result.push(cur);
      //console.log(stack);
      //console.log(`result: ${result}`);
    }
  }
}

dfs(1);
//console.log(graph);
console.log(count - 1);