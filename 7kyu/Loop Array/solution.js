function loopArr(arr, direction, steps) {
  for (let i = 1; i <= steps; i++) {
    direction === "left" ? arr.push(arr.shift()) : arr.unshift(arr.pop());
  }
  return arr;
}
