const solution = (str, ending) =>
  ending === "" || str.slice(-ending.length) === ending;
