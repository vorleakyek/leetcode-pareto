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


    return true;

};
