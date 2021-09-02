function digital_root(n) {
  if (n < 10) {
    return n;
  }

  const nArr = n.toString().split("");
  const sum = nArr.reduce((a, b) => parseInt(a) + parseInt(b));
  return sum < 10 ? sum : digital_root(sum);
}
