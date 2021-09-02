function prefill(n, v) {
  let result = [];

  if (parseInt(n) === 0) {
    return [];
  }

  if (
    !parseInt(n) ||
    !+n ||
    !isFinite(+n) ||
    +n < 0 ||
    +n - Math.floor(+n) !== 0
  ) {
    throw new TypeError(`${n} is invalid`);
  }

  for (let i = 0; i < +n; i++) {
    result.push(v);
  }

  return result;
}
