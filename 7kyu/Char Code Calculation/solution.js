function calc(x) {
  const total1 = x
    .split("")
    .map((l) => l.charCodeAt())
    .join("");
  const total2 = total1.replace(/7/g, "1");
  const calcSum = (str) => str.split("").reduce((x, y) => x + parseInt(y), 0);
  return calcSum(total1) - calcSum(total2);
}
