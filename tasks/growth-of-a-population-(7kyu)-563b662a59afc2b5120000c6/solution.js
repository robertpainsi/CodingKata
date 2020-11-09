export default function nbYear(p0, percent, aug, p) {
  let currentP = p0;
  let years = 0;
  while (currentP < p) {
    currentP = currentP * (1 + percent / 100) + aug;
    years++;
  }
  return years;
}
