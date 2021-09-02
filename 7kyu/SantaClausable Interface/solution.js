function isSantaClausable(obj) {
  const hasSayHoHoHo = typeof obj.sayHoHoHo === "function";
  const hasDistributeGifts = typeof obj.distributeGifts === "function";
  const hasGoDownTheChimney = typeof obj.goDownTheChimney === "function";

  return hasSayHoHoHo && hasDistributeGifts && hasGoDownTheChimney;
}
