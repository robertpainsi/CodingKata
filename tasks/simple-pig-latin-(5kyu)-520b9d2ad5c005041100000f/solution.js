export default function pigIt(str) {
  return str.replace(/([A-z])([A-z]*)/gi, (m, match1, match2) => {
    if (match2) {
      return `${match2}${match1}ay`;
    } else {
      return `${m}ay`;
    }
  });
}
