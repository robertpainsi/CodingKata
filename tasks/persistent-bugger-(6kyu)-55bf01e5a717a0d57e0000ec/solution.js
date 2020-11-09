export default function persistence(num) {
  let n = num;
  let steps = 0;
  while (n >= 10) {
    steps++;
    n = `${n}`
      .split('')
      .map(c => parseInt(c, 10))
      .reduce((a, v) => a * v);
  }
  return steps;
}
