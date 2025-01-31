function testOperators() {
  const a = 10;
  const b = 20;
  const c = 30;
  const d = 40;
  const e = 50;

  return a - b + (c * d) / e;
}

console.log(testOperators());

// brackets - higher
// addition/substraction same precedence from left to right
// multiplication/division same precedence from left to left
// comparing multiplication/division and addition/substration - multiplication/division have higher precedence
