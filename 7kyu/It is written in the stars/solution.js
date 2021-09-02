function starSign(date) {
  const day = date.getDate();
  switch (date.getMonth()) {
    case 0:
      return day > 20 ? "Aquarius" : "Capricorn";
    case 1:
      return day > 19 ? "Pisces" : "Aquarius";
    case 2:
      return day > 20 ? "Aries" : "Pisces";
    case 3:
      return day > 20 ? "Taurus" : "Aries";
    case 4:
      return day > 21 ? "Gemini" : "Taurus";
    case 5:
      return day > 21 ? "Cancer" : "Gemini";
    case 6:
      return day > 22 ? "Leo" : "Cancer";
    case 7:
      return day > 23 ? "Virgo" : "Leo";
    case 8:
      return day > 23 ? "Libra" : "Virgo";
    case 9:
      return day > 23 ? "Scorpio" : "Libra";
    case 10:
      return day > 22 ? "Sagittarius" : "Scorpio";
    case 11:
      return day > 21 ? "Capricorn" : "Sagittarius";
  }
}
