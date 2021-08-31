function cache(func) {
  const obj = {};
  return function inner(a, b) {
    const key = JSON.stringify(a) + JSON.stringify(b);
    if (obj.hasOwnProperty(key)) return obj[key];
    obj[key] = func(a, b);
    return obj[key];
  };
}
