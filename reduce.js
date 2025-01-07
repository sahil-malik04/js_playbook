const arr1 = [1, 2, 3, 4, 5];

const output1 = arr1.reduce((acc, curr) => acc + curr, 0);

console.log(output1, "output1");

const arr2 = [10, 20, 30, 40];

const output2 = arr2.reduce((acc, curr) => acc * curr, 1);

console.log(output2, "output2");

const arr3 = [
  { description: "Rent", amount: 1000 },
  { description: "Groceries", amount: 300 },
  { description: "Transport", amount: 100 },
];

const output3 = arr3.reduce((acc, curr) => acc + curr.amount, 0);
console.log(output3, "output3");

const arr4 = [5, 10, 20, 15];

const output4 = arr4.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(output4, "output4");

const arr5 = ["a", "b", "c", "d"];

const output5 = arr5.reduce((acc, curr) => acc + curr, "");

console.log(output5, "output5");

// level 2

const arr6 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const output6 = arr6.reduce((acc, curr) => acc + curr.age, 0) / arr6.length;
console.log(output6, "output6");

const arr7 = [1, 2, 3, 4, 5, 6, 7];

const output7 = arr7.reduce(
  (acc, curr) => {
    if (curr % 2 === 0) {
      acc.even += 1;
    } else {
      acc.odd += 1;
    }
    return acc;
  },
  {
    even: 0,
    odd: 0,
  }
);

console.log(output7, "output7");

const arr8 = [
  { id: 1, completed: true },
  { id: 2, completed: false },
  { id: 3, completed: true },
  { id: 4, completed: false },
];

const output8 = arr8.reduce((acc, curr) => {
  if (curr.completed) {
    acc += 1;
  }
  return acc;
}, 0);

console.log(output8, "output8");

const arr9 = [
  { amount: 200, type: "credit" },
  { amount: 100, type: "debit" },
  { amount: 50, type: "debit" },
  { amount: 500, type: "credit" },
];

const output9 = arr9.reduce((acc, curr) => {
  if (curr.type === "credit") {
    acc += curr.amount;
  }
  return acc;
}, 0);

console.log(output9, "output9");

const arr10 = ["cat", "elephant", "giraffe", "tiger"];

const output10 = arr10.reduce((acc, curr) => {
  if (curr.length > acc.length) {
    acc = curr;
  }
  return acc;
}, "");

console.log(output10, "output10");

const arr11 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const output11 = arr11.reduce((acc, curr) => {
  acc = acc.concat(curr);
  return acc;
}, []);

console.log(output11, "output11");
