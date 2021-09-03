// first solution
function duplicateEncode(word) {
  const arr = word.toLowerCase().split("");
  return arr
    .map((x, i) => (arr.find((y, indx) => x === y && i !== indx) ? ")" : "("))
    .join("");
}

// after refactor
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map((x, i, arr) => (arr.find((y, j) => x === y && i !== j) ? ")" : "("))
    .join("");
}
