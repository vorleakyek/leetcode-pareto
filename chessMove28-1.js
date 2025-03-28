

function isValid(board, r, c) {
  return (0 <= r && r < board.length) && (0 <= c && c < board[0].length) && board[r][c] !== 1;  
}

function validMoves(board, r, c) {
  const moves = [];
  const kingDirections = [[-1,0], [1,0], [0,-1], [0,1], [-1,1], [-1, -1], [1, 1], [1,-1]]; 
  
  for (let i=0; i<kingDirections.length; i++) {
      
    const newRow = r + kingDirections[i][0];
    const newCol = c + kingDirections[i][1];

    console.log(newRow, newCol, isValid(board, newRow, newCol))  
    if (isValid(board, newRow, newCol)) {
      moves.push([newRow, newCol]);
    }
  }  

  console.log(moves);
  return moves; 
}


const board = [
         [0, 0, 0, 1, 0, 0],
         [0, 1, 1, 1, 0, 0],
         [0, 1, 0, 1, 1, 0],
         [1, 1, 1, 1, 0, 0],
         [0, 0, 0, 0, 0, 0],
         [0, 1, 0, 0, 0, 0]];
const r = 3;
const c = 5;

validMoves(board, r, c);

// Your previous Plain Text content is preserved below:

// Hello! Your interview question is below. Write code in this pad just like you would normally – your AI Interviewer will be able to see it.

// # Chess Moves

// For context, this is how the King, Knight, and Queen move on a chessboard:

// https://iio-beyond-ctci-images.s3.us-east-1.amazonaws.com/chess-moves-1.png

// The king can go to any adjacent cell, including diagonals. The knight 'jumps' one cell in one dimension and two in the other, even if there are pieces in between. The queen can move **any number of cells** in any direction, including diagonals, but cannot go through occupied cells.

// Given three inputs:

// - `board`, an `nxn` binary grid, where a `0` denotes an empty cell, `1` denotes an occupied cell, and `n > 0`
// - `piece`, which is one of `"king"`, `"knight"`, or `"queen"`
// - `r` and `c`, with `0 ≤ r < n` and `0 ≤ c < n`, which denote a position in the board

// Return a list of all the **unoccupied** cells in `board` that can be reached by the given `piece` in one move starting from `[r, c]`. The order of the output cells does not matter.

// ```
// Example 1:
// board = [[0, 0, 0, 1, 0, 0],
//          [0, 1, 1, 1, 0, 0],
//          [0, 1, 0, 1, 1, 0],
//          [1, 1, 1, 1, 0, 0],
//          [0, 0, 0, 0, 0, 0],
//          [0, 1, 0, 0, 0, 0]]
// piece = "king"
// r = 3
// c = 5
// Output: [[2, 5], [3, 4], [4, 4], [4, 5]]

// Example 2:
// board = [[0, 0, 0, 1, 0, 0],
//          [0, 1, 1, 1, 0, 0],
//          [0, 1, 0, 1, 1, 0],
//          [1, 1, 1, 1, 0, 0],
//          [0, 0, 0, 0, 0, 0],
//          [0, 1, 0, 0, 0, 0]]
// piece = "knight"
// r = 4
// c = 3
// Output: [[2, 2], [3, 5], [5, 5]]

// Example 3:
// board = [[0, 0, 0, 1, 0, 0],
//          [0, 1, 1, 1, 0, 0],
//          [0, 1, 0, 1, 1, 0],
//          [1, 1, 1, 1, 0, 0],
//          [0, 0, 0, 0, 0, 0],
//          [0, 1, 0, 0, 0, 0]]
// piece = "queen"
// r = 4
// c = 4
// Output: [[3, 4], [3, 5], [4, 0], [4, 1], [4, 2], [4, 3], [4, 5], [5, 3], [5, 4], [5, 5]]
// ```

// https://iio-beyond-ctci-images.s3.us-east-1.amazonaws.com/chess-moves-2.png

// Constraints:

// - `1 ≤ n ≤ 100`
// - `board[i][j]` is either `0` or `1`
// - `0 ≤ r, c < n`
// - `piece` is one of `"king"`, `"knight"`, or `"queen"`
