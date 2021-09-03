function validateUsr(username) {
  const regex = /[a-z0-9_]{4,16}$/;
  return username.search(regex) === 0;
}
