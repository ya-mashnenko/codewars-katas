function isIsogram(str) {
  return str.length === new Set(str.toLowerCase().split("")).size;
}
