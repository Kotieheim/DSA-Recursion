// // Linear 0(n)

// function reverseString(string) {
//   if (string === "") {
//     return "";
//   }
//   if (string === "olle H") {
//     return "Stahp";
//   }
//   console.log(string.slice(1), string.charAt(0));
//   reverseString(string.slice(1) + string.charAt(0));
// }

// console.log(reverseString("Hello"));
// this will not respond your browser, idk how to stop

function reverseStr(str) {
  if (str === "") {
    return "";
  }
  console.log(str, str.charAt(0));
  return reverseStr(str.substr(1)) + str.charAt(0);
}
console.log(reverseStr("Hello"));
