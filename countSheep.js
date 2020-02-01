// const sumOf = function(list) {
//   if (list.length === 1) {
//     return list[0];
//   }
//   return list[0] + sumOf(list.slice(1));
// };

// let lst = [2, 4, 6, 8, 10];
// console.log(sumOf(lst));

const numOfSheep = function(sheep) {
  console.log(sheep);
  if (sheep === 0) {
    return console.log("no sheep left");
  } else {
    console.log(sheep + " " + "Another sheep and fence");
    numOfSheep(sheep - 1);
  }
};
console.log(numOfSheep(3));
