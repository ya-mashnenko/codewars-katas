const add = (a) => {
  const inner = (b) => {
    a += b;
    return inner;
  };
  inner.toString = () => a;
  return inner;
};
