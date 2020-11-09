export default function bouncingBall(h, bounce, window) {
  if (h <= 0) {
    return -1;
  }
  if (bounce <= 0 || bounce >= 1) {
    return -1;
  }
  if (window >= h) {
    return -1;
  }

  let times = 0;
  for (let i = 1; true; i++) {
    times++;
    if (h * Math.pow(bounce, i) <= window) {
      break;
    }
    times++;
  }
  return times;
}
