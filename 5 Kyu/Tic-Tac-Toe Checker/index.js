// https://www.codewars.com/kata/525caa5c1bf619d28c000335

function isSolved(board) {
    for (let i = 0; i < board.length; i++) {
      if (
        (board[i][0] === 1 && board[i][1] === 1 && board[i][2] === 1) ||
        (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) ||
        (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1)
      ) {
        return 1;
      }
      if (
        (board[i][0] === 2 && board[i][1] === 2 && board[i][2] === 2) ||
        (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) ||
        (board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2)
      ) {
        return 2;
      }
    }
    for (let j = 0; j < board.length; j++) {
      if (board[j][0] === 0 || board[j][1] === 0 || board[j][2] === 0) {
        return -1;
      }
    }
    return 0;
  }
  
  // console.log(
  //   isSolved([
  //     [2, 1, 1],
  //     [0, 1, 1],
  //     [2, 2, 2],
  //   ])
  // );
  
  // console.log(
  //   isSolved([
  //     [1, 2, 0],
  //     [0, 1, 2],
  //     [0, 0, 1],
  //   ])
  // );