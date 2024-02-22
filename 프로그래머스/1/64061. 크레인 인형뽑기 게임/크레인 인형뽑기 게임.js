function solution(board, moves) {
  let stack = [];
  let N = board.length;
  let result = 0;

  moves.forEach((el) => {
    let doll = 0;
    for (let i = 0; i < N; i++) {
      if (board[i][el - 1] !== 0) {
        doll = board[i][el - 1];
        board[i][el - 1] = 0;
        stack.push(doll);
        if (stack[stack.length - 1] == stack[stack.length - 2]) {
          stack.splice(-2, 2);
          result += 2;
        }
        break;
      }
    }
  });
    return result
}







// 1.board에서 moves에 따라서 제일 윗부분의 인형을 뽑는다.
//     1)탐색
// 2.뽑으면 해당 부분 0으로 만든다.
// 3.stack에 뽑은 인형 하나씩 push
// 4.없어지는 인형 수 추적할 result 변수 생성
// 5.slice로 제거


// [
//     [0,0,0,0,0], board[0][2]
//     [0,0,1,0,3], board[1][2]
//     [0,2,5,0,1], board[2][2]
//     [4,2,4,4,2], board[3][2]
//     [3,5,1,3,1]  board[4][2]
// ]

// 1 5 3 5 1 2 1 4

// 4 3 1 1 3 2   4