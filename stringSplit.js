// function stringSplit(string, seperate) {
//   if (string === "") {
//     return "";
//   }
//   const char = string[0];
//   if (char === seperate) {
//     return stringSplit(string.slice(1), seperate);
//   } else {
//     return char + stringSplit(string.slice(1), seperate);
//   }
// }

// console.log(stringSplit("02/20/2020", []));
// IDK

function stringPlist(str, arr) {
  const newArr = [];
  if (str === "") {
    return "";
  }
  let split = str.indexOf("/");
  let chunk = str.slice(-split);
  newArr.push(chunk);

  return newArr;
}
console.log(stringPlist("02/20/2020"));
