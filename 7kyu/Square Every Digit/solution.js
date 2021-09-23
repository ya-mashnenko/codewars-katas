function squareDigits(num) {
  const arr = Array.from(num.toString()).map(Number);
  return +arr.map((x) => x * x).join("");
}
