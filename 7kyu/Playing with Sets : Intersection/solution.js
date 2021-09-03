function inter(s1, s2) {
  const result = [];
  s1.forEach((el) => {
    if (s2.has(el)) {
      result.push(el);
    }
  });
  return new Set(result);
}
