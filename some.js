const words = ["apple", "banana", "cherry", "grapefruit"];

const result = words.some((item) => item.length > 10);
console.log(result);

const numbers = [25, 50, 100, 150, 200];

const solution = numbers.some((item) => {
  return item > 100 && item % 2 !== 0;
});

console.log(solution, "s");
