function count(array) {
  let obj = {};
  array.map((x) => (obj[x] ? obj[x]++ : (obj[x] = 1)));
  return obj;
}
