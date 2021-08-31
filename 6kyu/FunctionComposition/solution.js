// first solution
const compose =
  (...functions) =>
  (...args) =>
    functions.reduceRight((acc, f) => f(acc), functions.pop()(...args));

// after refactor
const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));
