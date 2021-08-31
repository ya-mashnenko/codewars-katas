function partitionOn(pred, items) {
  const trueArr = items.filter((x) => pred(x));
  const falseArr = items.filter((x) => !pred(x));
  const arr = falseArr.concat(trueArr);

  items.splice(0, items.length, ...arr);

  return items.findIndex(pred);
}
