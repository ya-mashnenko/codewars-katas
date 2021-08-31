function Cat(name, weight) {
  if (!name || !weight) {
    throw new Error();
  }

  this.name = name;
  this._weight = weight;
  Cat.allWeights[this.name] = this._weight;

  Object.defineProperty(this, "weight", {
    enumerable: true,
    configurable: true,
    get: function () {
      return this._weight;
    },

    set: function (value) {
      this._weight = value;
      Cat.allWeights[this.name] = this._weight;
    },
  });
}

Cat.allWeights = {};
Cat.averageWeight = function () {
  const allWeights = Object.values(this.allWeights);
  return allWeights.reduce((a, b) => a + b, 0) / allWeights.length;
};
