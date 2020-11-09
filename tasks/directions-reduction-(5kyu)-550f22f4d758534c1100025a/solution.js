export default function dirReduc(arr) {
  const simplified = [];
  for (const way of arr) {
    if (simplified.length > 0 && isOppositeWay(way, simplified[simplified.length - 1])) {
      simplified.pop();
    } else {
      simplified.push(way);
    }
  }
  return simplified;
}

function isOppositeWay(w1, w2) {
  const ways = [w1.toUpperCase(), w2.toUpperCase()];

  return ways.includes('NORTH') && ways.includes('SOUTH')
    || ways.includes('EAST') && ways.includes('WEST');
}
