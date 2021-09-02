function getMiddle(s) {
  const sL = s.length;
  if (sL === 1) {
    return s;
  }
  console.log(s);
  return sL % 2 ? s.slice(sL / 2, sL - 1)[0] : s[sL / 2 - 1] + s[sL / 2];
}
