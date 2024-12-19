/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

  //check condition 1
  //row number is being updated after going through all the columns first
  for (let r = 0; r < board[0].length; r++) {
    const rowMap = new Map();

    for (let c = 0; c < board[0].length; c++) {
      //fixed row and updated each column before updating the row
      if (rowMap.has(board[r][c])) {
        return false;
      }

      if (board[r][c] !== '.') {
        rowMap.set(board[r][c], 1);
      }
    }
  }

  //check condition 2
  //colunm number is being updated after going through all the rows first
  for (let c = 0; c < board[0].length; c++) {
    const colMap = new Map();

    for (let r = 0; r < board[0].length; r++) {
      //fixed column and updated each row before updating the column
      if (colMap.has(board[r][c])) {
        return false;
      }

      if (board[r][c] !== '.') {
        colMap.set(board[r][c], 1);
      }
    }
  }


  //check the 3x3 sub boxes
  for (let i = 0; i < 9; i++) {

    const subBoxMap = new Map();
    console.log('i', i)
    const rowStart = Math.floor(i / 3) * 3;
    const colStart = (i % 3) * 3;

    for (let j = 0; j < 9; j++) {
      const row = rowStart + Math.floor(j / 3);
      const col = colStart + (j % 3);

      if (subBoxMap.has(board[row][col])) {
        return false;
      }

      if (board[row][col] !== ".") {
        subBoxMap.set(board[row][col], 1)
        console.log('inside loop')
        console.log(subBoxMap)
      }
    }
  }

  return true;

};
