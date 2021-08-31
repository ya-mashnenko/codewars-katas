function convert(input, source, target) {
  if (input.length === 1 && source.indexOf(input) === 0) {
    return target[0];
  }

  let inputArr = input
    .split("")
    .reverse()
    .reduce(
      (acc, cur, indx) =>
        acc + source.indexOf(cur) * Math.pow(source.length, indx),
      0
    );

  let answer = [];

  do {
    answer.push(target[inputArr % target.length]);
    inputArr = Math.floor(inputArr / target.length);
  } while (inputArr > 0);
  return answer.reverse().join("");
}
