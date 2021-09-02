Array.prototype.square = function () {
  const arr = Array.from(this);
  for (let i = 0; i < this.length; i++) {
    arr[i] = Math.pow(arr[i], 2);
  }
  return arr;
};

Array.prototype.cube = function () {
  const arr = Array.from(this);
  for (let i = 0; i < this.length; i++) {
    arr[i] = Math.pow(arr[i], 3);
  }
  return arr;
};

Array.prototype.average = function () {
  let result = 0;
  for (let i = 0; i < this.length; i++) {
    result += this[i];
  }
  return result / this.length || NaN;
};

Array.prototype.sum = function () {
  let result = 0;
  for (let i = 0; i < this.length; i++) {
    result += this[i];
  }
  return result;
};

Array.prototype.even = function () {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    this[i] % 2 === 0 && result.push(this[i]);
  }
  return result;
};

Array.prototype.odd = function () {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    this[i] % 2 !== 0 && result.push(this[i]);
  }
  return result;
};
