export default function findMissingLetter(array) {
  let previousCharCode = array[0].charCodeAt(0);
  for (let item of array) {
    const currentCharCode = item.charCodeAt(0);
    if (currentCharCode - previousCharCode > 1) {
      return String.fromCharCode(previousCharCode + 1);
    }
    previousCharCode = currentCharCode;
  }
}
