// Constant - 0(1)
function factoral(num) {
  if (num === 1) {
    return num;
  }
  console.log(num);
  return num * factoral(num - 1);
}

console.log(factoral(5));
