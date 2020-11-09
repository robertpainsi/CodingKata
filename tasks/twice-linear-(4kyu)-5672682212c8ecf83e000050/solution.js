const sequence = [1];
let i = 0;

export default function dblLinear(n) {
  for (; i < n; i++) {
    const x = sequence[i];
    const y = 2 * x + 1;
    const z = 3 * x + 1;

    binaryInsertNoDuplicates(y, sequence);
    binaryInsertNoDuplicates(z, sequence);
  }
  return sequence[n];
}

function binaryInsertNoDuplicates(value, array, left = 0, right = array.length - 1) {
  if (array.length === 0) {
    array.push(value);
    return;
  }
  if (right < left) {
    array.splice(left, 0, value);
    return;
  }

  const middle = left + Math.floor((right - left) / 2);

  if (value < array[middle]) {
    binaryInsertNoDuplicates(value, array, left, middle - 1);
  } else if (value > array[middle]) {
    binaryInsertNoDuplicates(value, array, middle + 1, right);
  }
}
