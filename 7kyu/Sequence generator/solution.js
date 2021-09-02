function sequence(n, pattern) {
  if (typeof pattern === "function") {
    return Array.from(Array(n), pattern);
  }
  return Array(n).fill(pattern);
}
