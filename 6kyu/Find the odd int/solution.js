function findOdd(A) {
  const obj = {};
  A.map((x) => (obj[x] ? obj[x]++ : (obj[x] = 1)));
  const num = Object.values(obj).find((x) => x % 2 !== 0);
  return +Object.keys(obj).find((key) => obj[key] === num);
}
