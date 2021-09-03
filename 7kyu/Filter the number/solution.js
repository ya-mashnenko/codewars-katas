const FilterString = function (value) {
  return parseInt(value.match(/\d/g).join(""));
};
