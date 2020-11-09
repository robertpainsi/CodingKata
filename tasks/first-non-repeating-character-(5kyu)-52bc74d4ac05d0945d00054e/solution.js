export default function firstNonRepeatingLetter(s) {
  for (const l of s.split('')) {
    if (s.match(new RegExp(l, 'gi')).length === 1) {
      return l;
    }
  }
  return '';
}
