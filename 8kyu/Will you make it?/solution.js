// first solution
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return fuelLeft * mpg === distanceToPump || fuelLeft * mpg > distanceToPump;
};

// after refactor
const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  fuelLeft * mpg >= distanceToPump;
