function solution(m, n, board) {
  var answer = 0;
  let count = 0;
  let boardChange = board.map((el) => el.split(""));
  while (true) {
    let arr = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (boardChange[i][j]) {
          if (
            boardChange[i][j] === boardChange[i + 1][j] &&
            boardChange[i][j] === boardChange[i][j + 1] &&
            boardChange[i][j] === boardChange[i + 1][j + 1]
          ) 
          {
            arr.push([i, j], [i + 1, j], [i, j + 1], [i + 1, j + 1]);
          }
        }
      }
    }
    if (!arr.length) return count;
    let setCoordinate = Array.from(new Set(arr.map(JSON.stringify))).map(
      JSON.parse
    );
    count += setCoordinate.length;
    console.log(count);
    setCoordinate.sort((a, b) => b[0] - a[0] || b[1] - a[1]);
    setCoordinate.forEach((el) => (boardChange[el[0]][el[1]] = ""));

    let grid = Array(m).fill().map((_) => Array(n).fill(""));

    for (let i = m - 1; i >= 0; i--) {
      for (let j = 0; j < n; j++) {
        if (!boardChange[i][j]) {
          let a = 1;
          while (i-a >= 0) {
            if (boardChange[i - a][j]) {
              grid[i][j] = boardChange[i - a][j]; 
              boardChange[i - a][j] = "";
                
              break;
            }
            a+=1;
          }
        } 
          else {
          grid[i][j] = boardChange[i][j];
        }
      }
    }
    boardChange = grid;
  }
  return count;
}