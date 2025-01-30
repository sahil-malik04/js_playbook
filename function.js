// function declaration

// always required a name
function testFunc1() {
  const a = 10;
  const b = 15;
  return (a + b) * (a + b);
}

console.log(testFunc1());

// function expression

// it usually assigned to a variable (can be named or anonymous)
const testFunc2 = () => {
  const a = 10;
  const b = 20;
  return (a + b) / 10;
};

console.log(testFunc2());
