function construct(Class, ...args) {
  let obj = {};
  Class.apply(obj, args);
  Object.setPrototypeOf(obj, Class.prototype);

  return obj;
}
