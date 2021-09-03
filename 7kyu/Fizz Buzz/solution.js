// first solution
function fizzbuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.map((num) => {
    return num % 5 === 0 && num % 3 === 0
      ? "FizzBuzz"
      : num % 3 === 0
      ? "Fizz"
      : num % 5 === 0
      ? "Buzz"
      : num;
  });
}

// after refactor
function fizzbuzz(n) {
  let arr = [];
  for (let x = 1; x <= n; x++) {
    x % 3 === 0 && x % 5 === 0
      ? arr.push("FizzBuzz")
      : x % 3 === 0
      ? arr.push("Fizz")
      : x % 5 === 0
      ? arr.push("Buzz")
      : arr.push(x);
  }
  return arr;
}
