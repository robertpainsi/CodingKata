export default function moveZeros(arr) {
  let numberOfZeros = 0;
  return arr.filter(v => {
    if (v === 0) {
      numberOfZeros++;
      return false;
    }
    return true;
  }).concat(Array(numberOfZeros).fill(0));
}
