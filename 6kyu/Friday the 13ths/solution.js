function fridayTheThirteenths(start, end) {
  let dateStr = "";

  if (!end) {
    for (let i = 0; i < 12; i++) {
      let searchDate = new Date(start, i, 13);
      let dayOfWeek = searchDate.getDay();
      if (dayOfWeek === 5) {
        let month = searchDate.getMonth();
        dateStr = dateStr + `${month + 1}/13/${start} `;
      }
    }
  }

  for (let x = start; x <= end; x++) {
    for (let i = 0; i < 12; i++) {
      let searchDate = new Date(x, i, 13);
      let dayOfWeek = searchDate.getDay();
      if (dayOfWeek === 5) {
        let month = searchDate.getMonth();
        dateStr = dateStr + `${month + 1}/13/${x} `;
      }
    }
  }
  return dateStr.trim();
}
