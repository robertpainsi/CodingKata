export default function longestSlideDown(pyramid) {
  let rowWithLength = pyramid[pyramid.length - 1];
  for (let rowIndex = pyramid.length - 2; rowIndex >= 0; rowIndex--) {
    rowWithLength = pyramid[rowIndex].map((v, i) => v + Math.max(rowWithLength[i], rowWithLength[i + 1]));
  }
  return rowWithLength[0];
}
