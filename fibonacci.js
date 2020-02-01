// Linear? 0(n)

function fibonnaci(num) {
  if (num === 1) {
    return 1;
  }
  if (num === 2) {
    return 1;
  }
  return fibonnaci(num - 1) + fibonnaci(num - 2);
}

console.log(fibonnaci(3));
