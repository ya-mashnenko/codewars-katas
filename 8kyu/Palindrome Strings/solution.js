function isPalindrome(line) {
  return line == [...("" + line)].reverse().join("");
}
