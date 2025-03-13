try {
  console.log(newvar);
} catch (err) {
  console.log(err);
}

const multiply = 10 * 2;
console.log(multiply);

try {
  const a = 10;
  throw new Error("custom error");
  const b = 20;
  const result = a * b;
  console.log(result);
} catch (err) {
  console.log(err.message);
} finally {
  console.log("finally block");
}
