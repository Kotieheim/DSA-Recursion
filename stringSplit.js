function stringSplit(string, seperate) {
  if (string === "") {
    return "";
  }
  const char = string[0];
  if (char === seperate) {
    return stringSplit(string.slice(1), seperate);
  } else {
    return char + stringSplit(string.slice(1), seperate);
  }
}

console.log(stringSplit("02/20/2020", []));
// IDK
