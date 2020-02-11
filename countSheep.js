// // Constant - 0(1)

// const numOfSheep = function(sheep) {
//   console.log(sheep);
//   if (sheep === 0) {
//     return console.log("no sheep left");
//   } else {
//     console.log(sheep + " " + "Another sheep and fence");
//     numOfSheep(sheep - 1);
//   }
// };
// console.log(numOfSheep(3));

function countSheep(sheep) {
  if (sheep === 0) {
    return `All sheep jumped over the fence`;
  } else {
    console.log(`${sheep}: Another sheep jumps over the fence`);
    return countSheep(sheep - 1);
  }
}
console.log(countSheep(3));
