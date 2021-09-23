function positiveSum(arr) {
  const posArr = arr.filter((x) => x > 0);
  return posArr.length < 1 ? 0 : posArr.reduce((x, y) => x + y);
}
