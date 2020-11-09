export default function perimeter(n) {
  if (n === 0) {
    return 4;
  }

  let a = 1;
  let b = 1;
  let c;
  let sum = a + b;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;

    sum += c;
  }

  return sum * 4;
}
