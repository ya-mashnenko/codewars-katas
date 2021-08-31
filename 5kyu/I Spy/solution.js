function spyOn(func) {
  let counter = 0;

  const spy = (...args) => {
    spy.results.push(func(...args));
    spy.argValues.push(...args);

    counter++;
    return func(...args);
  };

  spy.results = [];
  spy.argValues = [];

  spy.callCount = () => counter;
  spy.wasCalledWith = (val) => spy.argValues.includes(val);
  spy.returned = (val) => spy.results.includes(val);
  return spy;
}
