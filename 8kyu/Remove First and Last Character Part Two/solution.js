function array(arr) {
  const result = arr.split(",");
  return result.length < 3
    ? null
    : result.slice(1, result.length - 1).join(" ");
}
