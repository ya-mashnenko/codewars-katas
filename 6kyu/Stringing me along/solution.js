function createMessage(str) {
  let arr = [str];
  return function inner(str) {
    if (str) {
      arr.push(str);
      return inner;
    }
    return arr.join(" ");
  };
}
