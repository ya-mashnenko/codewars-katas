Array.prototype.filter = function (func) {
  let arr = [];
  this.map((item) => func(item) && arr.push(item));
  return arr;
};
