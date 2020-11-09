function sum(n) {
  return n * (n + 1) / 2;
}

function sumOfMultiples(number, multipleOf) {
  return sum(Math.floor(number / multipleOf)) * multipleOf;
}

export default function solution(number) {
  if (number <= 1) {
    return 0;
  }

  const numberMinusOne = number - 1;
  return sumOfMultiples(numberMinusOne, 3)
    + sumOfMultiples(numberMinusOne, 5)
    - sumOfMultiples(numberMinusOne, 15);
}
