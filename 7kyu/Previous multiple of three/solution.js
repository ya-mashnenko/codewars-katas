const prevMultOfThree = (n) => {
  if (!(n % 3)) {
    return n;
  }
  if (n < 10) {
    return null;
  }
  return prevMultOfThree(Math.floor(n / 10));
};
