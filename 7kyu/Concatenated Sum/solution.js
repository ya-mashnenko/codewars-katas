const checkConcatenatedSum = (num, n) => {
  if (n === 1) {
    return true;
  }

  const arr = num.toString().split("");

  if (num < 0) {
    arr.shift();
    return (
      num ===
      -arr
        .map((num) => num.repeat(n))
        .reduce((num1, num2) => parseInt(num1) + parseInt(num2))
    );
  }

  return (
    num ===
    arr
      .map((num) => num.repeat(n))
      .reduce((num1, num2) => parseInt(num1) + parseInt(num2))
  );
};
