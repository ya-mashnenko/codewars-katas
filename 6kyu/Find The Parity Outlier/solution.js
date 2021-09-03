function findOutlier(integers) {
  const filteredArr = integers.filter((x) => x % 2 === 0);
  if (filteredArr.length === 1) {
    const [result] = filteredArr;
    return result;
  }
  return integers.find((x) => x % 2 !== 0);
}
