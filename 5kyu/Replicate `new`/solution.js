function nouveau(Constructor, ...args) {
  const obj = {};
  const res = Constructor.apply(obj, args);
  Object.setPrototypeOf(obj, Constructor.prototype);
  return Object.isExtensible(res) ? res : obj;
}
