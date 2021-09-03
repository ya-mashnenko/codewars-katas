const validPass = (password) =>
  /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]{4,19}$/i.test(password)
    ? "VALID"
    : "INVALID";
