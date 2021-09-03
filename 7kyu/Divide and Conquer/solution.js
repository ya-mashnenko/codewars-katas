function divCon(x) {
  const stringNums = x
    .filter((i) => typeof i === "string")
    .map((i) => +i)
    .reduce((i, j) => i + j, 0);
  const numNums = x
    .filter((i) => typeof i === "number")
    .reduce((i, j) => i + j, 0);
  return numNums - stringNums;
}
