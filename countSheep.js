// Constant - 0(1)

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
