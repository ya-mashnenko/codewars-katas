const compose =
  (...functions) =>
  (args) =>
    functions.reduceRight((acc, f) => f(acc), args);
