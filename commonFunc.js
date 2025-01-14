function add(a, b) {
  if (b !== undefined) {
    return a + b;
  }
  return function (c) {
    return a + c;
  };
}

console.log(add(2)(3));
console.log(add(3, 5));