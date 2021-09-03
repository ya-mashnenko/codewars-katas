function killer(suspectInfo, dead) {
  return Object.keys(suspectInfo).find((name) =>
    dead.every((deadPerson) => suspectInfo[name].includes(deadPerson))
  );
}
