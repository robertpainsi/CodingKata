export default function gap(g, m, n) {
  if (g < 2 || m <= 2 || n < m) {
    return null;
  }

  let lastPrime = 0;
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (i - lastPrime === g) {
        return [lastPrime, i];
      } else {
        lastPrime = i;
      }
    }
  }
  return null;
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
