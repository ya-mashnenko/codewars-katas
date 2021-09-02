Object.prototype.hash = function (string) {
  return string.split(".").reduce((acc, val) => acc && acc[val], this);
};
