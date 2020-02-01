function reverseString(string) {
  if (string === "") {
    return "";
  }
  if (string === "olle H") {
    return "Stahp";
  }
  console.log(string.slice(1), string.charAt(0));
  reverseString(string.slice(1) + string.charAt(0));
}

console.log(reverseString("Hello"));
// this will not respond your browser, idk how to stop
