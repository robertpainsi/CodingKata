export default function solvePuzzle(clues) {
  return solvePuzzleRecursive(clues, createAllPossibleRows([1, 2, 3, 4]));
}

const relatedRowCluesIndices = [
  [15, 4],
  [14, 5],
  [13, 6],
  [12, 7],
];
const relatedColumnCluesIndices = [
  [0, 11],
  [1, 10],
  [2, 9],
  [3, 8],
];
function solvePuzzleRecursive(clues, allRows, solution = []) {
  if (solution.length < 4) {
    for (const row of allRows) {
      if (!isValidAccordingClue(row, clues[relatedRowCluesIndices[solution.length][0]],
        clues[relatedRowCluesIndices[solution.length][1]])) {
        continue;
      }
      const currentSolution = [...solution, row];
      if (!isPartiallyValidLine(currentSolution)) {
        continue;
      }
      const result = solvePuzzleRecursive(clues, allRows, currentSolution);
      if (result) {
        return result;
      }
    }
  } else {
    let isResult = true;
    for (let i = 0; i < 4; i++) {
      const column = [solution[0][i], solution[1][i], solution[2][i], solution[3][i]];
      if (!isValidAccordingClue(column, clues[relatedColumnCluesIndices[i][0]], clues[relatedColumnCluesIndices[i][1]])) {
        isResult = false;
        break;
      }
    }
    if (isResult) {
      return solution;
    }
    return null;
  }
  return null;
}

function isValidAccordingClue(line, left, right) {
  if (left !== 0 && getLeftClueFromRow(line) !== left) {
    return false;
  }
  if (right !== 0 && getRightClueFromRow(line) !== right) {
    return false;
  }
  return true;
}

function isPartiallyValidLine(solution) {
  for (let column = 0; column < 4; column++) {
    const knownValues = new Set();
    for (const row of solution) {
      const v = row[column];
      if (knownValues.has(v)) {
        return false;
      }
      knownValues.add(v);
    }
  }
  return true;
}

function createAllPossibleRows(values, currentSet = [], handled = new Set()) {
  const key = currentSet.join(',');
  if (handled.has(key)) {
    return [];
  }
  handled.add(key);
  if (values.length === 0) {
    return [currentSet];
  }
  let result = [];
  if (currentSet.length === 0) {
    for (let i = 0; i < values.length; i++) {
      const s = [...currentSet, values[i]];
      const v = [...values];
      v.splice(i, 1);
      result = result.concat(createAllPossibleRows(v, s, handled));
    }
  } else {
    for (let i = 0; i < values.length; i++) {
      for (let k = 0; k < values.length; k++) {
        const s = [...currentSet];
        s.splice(k, 0, values[i]);
        const v = [...values];
        v.splice(i, 1);
        result = result.concat(createAllPossibleRows(v, s, handled));
      }
    }
  }
  return result;
}

function getLeftClueFromRow(row) {
  let max = 0;
  return row.reduce((a, v) => {
    if (v > max) {
      max = v;
      return a + 1;
    } else {
      return a;
    }
  }, 0);
}

function getRightClueFromRow(row) {
  return getLeftClueFromRow([...row].reverse());
}
