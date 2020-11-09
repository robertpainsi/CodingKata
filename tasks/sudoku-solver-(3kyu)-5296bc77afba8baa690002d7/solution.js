export default function sudoku(puzzle) {
  while (!isSolved(puzzle)) {
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
      for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
        if (puzzle[rowIndex][columnIndex] !== 0) {
          continue;
        }

        let remainingNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < 3; i++) {
          for (let k = 0; k < 3; k++) {
            const expandedIndex = i * 3 + k;
            const values = [
              puzzle[rowIndex][expandedIndex],
              puzzle[expandedIndex][columnIndex],
              puzzle[Math.floor(rowIndex / 3) * 3 + i][Math.floor(columnIndex / 3) * 3 + k],
            ];
            remainingNumbers = remainingNumbers.filter(n => !values.includes(n));
          }
        }
        if (remainingNumbers.length === 1) {
          puzzle[rowIndex][columnIndex] = remainingNumbers[0];
        }
      }
    }
  }
  return puzzle;
}

function isSolved(puzzle) {
  for (const row of puzzle) {
    for (const field of row) {
      if (field === 0) {
        return false;
      }
    }
  }
  return true;
}
