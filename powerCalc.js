// //Linear 0(n)

// function powerCalculator(base, exponent) {
//   if (exponent < 0) {
//     return "Exponent should be >= 0";
//   }
//   if (exponent === 0) {
//     return 1;
//   }
//   console.log(base ** exponent);
//   return base * powerCalculator(base, exponent - 1);
// }

// console.log(powerCalculator(10, 4));

function powerCalculator(num, ex) {
  if (ex < 0) {
    return "exponent should be >= 0";
  }
  if (ex === 0) {
    return 1;
  }
  console.log(ex);
  return num * powerCalculator(num, ex - 1);
}

console.log(powerCalculator(10, 4));
