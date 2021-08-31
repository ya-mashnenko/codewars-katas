function createSecretHolder(secret) {
  let obj = {};

  Object.defineProperty(obj, "_secret", {
    value: secret,
    enumerable: false,
    configurable: false,
    writable: true,
  });

  obj.getSecret = function () {
    return this._secret;
  };

  obj.setSecret = function (val) {
    return (this._secret = val);
  };

  return obj;
}
