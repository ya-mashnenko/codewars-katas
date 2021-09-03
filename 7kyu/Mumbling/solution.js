function accum(s) {
  return s
    .split("")
    .map((a, i) => {
      let r = a.toUpperCase();
      for (let c = 0; c < i; c++) {
        r += a.toLowerCase();
      }
      return r;
    })
    .join("-");
}
