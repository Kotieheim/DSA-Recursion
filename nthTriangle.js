// nth === x[(n-1)] + n

// Constant? 0(1)

function triangleNum(n) {
  //   console.log(n);
  if (n === 1) {
    return 1;
  }
  console.log(n);
  return n + triangleNum(n - 1);
}

console.log(triangleNum(7));
