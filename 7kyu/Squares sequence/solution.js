function squares(x, n) {
  if (n <= 0) {
    return [];
  }
  const arr = new Array(n).fill(x);

  arr.forEach((el, i) => {
    if (i !== 0) {
      arr[i] = Math.pow(arr[i - 1], 2);
    }
    return el;
  });

  return arr;
}
