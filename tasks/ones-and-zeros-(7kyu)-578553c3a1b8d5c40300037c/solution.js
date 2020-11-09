export default function binaryArrayToNumber(arr) {
  return [...arr].reverse().reduce((acc, v, i) => acc + v * Math.pow(2, i), 0);
}
