//https://algo.monster/liteproblems/36

function isValidSudoku(board: string[][]): boolean {
  // Initialize boolean arrays to track the presence of digits in rows, columns, and sub-boxes.
  const rowsTracker: boolean[][] = Array.from({ length: 9 }, () => new Array(9).fill(false));
  const colsTracker: boolean[][] = Array.from({ length: 9 }, () => new Array(9).fill(false));
  const subsTracker: boolean[][] = Array.from({ length: 9 }, () => new Array(9).fill(false));

  // Loop through each cell of the board.
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // Get the numeric value of the cell, if it's a number.
      const num = board[i][j].charCodeAt(0) - '0'.charCodeAt(0) - 1; // Adjust ASCII '1' to index 0

      // Skip the cell if it's not a valid number (i.e., '.').
      if (num < 0 || num > 8) {
        continue;
      }

      // Calculate the index for the sub-boxes.
      const subBoxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      // Check whether the number has already appeared in the current row, column, or sub-box.
      if (rowsTracker[i][num] || colsTracker[j][num] || subsTracker[subBoxIndex][num]) {
        return false; // If the number has appeared, the board is not valid.
      }

      // Mark the number as seen in the current row, column, and sub-box.
      rowsTracker[i][num] = true;
      colsTracker[j][num] = true;
      subsTracker[subBoxIndex][num] = true;
    }
  }

  // If no duplicates were found, the board is valid.
  return true;
}
