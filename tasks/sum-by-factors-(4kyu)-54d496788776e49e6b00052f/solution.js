export default function sumOfDivided(lst) {
  const maxValue = Math.max(...lst.map(Math.abs));

  const result = [];
  for (let i = 2; i <= maxValue; i++) {
    if (!isPrime(i)) {
      continue;
    }

    const sum = lst
      .filter((v) => v % i === 0 && i <= Math.abs(v))
      .reduce((a, b) => a + b, null);
    if (sum !== null) {
      result.push([i, sum]);
    }
  }
  return result;
}

function isPrime(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
