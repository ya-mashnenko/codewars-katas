const vaporcode = (string) =>
  string
    .split("")
    .filter((letter) => letter !== " ")
    .map((letter) => letter.toUpperCase())
    .join("  ");
