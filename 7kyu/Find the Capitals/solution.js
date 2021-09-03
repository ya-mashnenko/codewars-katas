function capital(capitals) {
  return capitals.map((obj) => {
    let { country, state, capital } = obj;
    return `The capital of ${country || state} is ${capital}`;
  });
}
