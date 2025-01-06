const arr1 = [1, 2, 3, 4, 5];

const output1 = arr1.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);

console.log(output1, "output1");

const arr2 = [10, 20, 30, 40];

const output2 = arr2.reduce((acc, curr) => {
  acc = acc * curr;
  return acc;
}, 1);

console.log(output2, "output2");

const arr3 = [
  { description: "Rent", amount: 1000 },
  { description: "Groceries", amount: 300 },
  { description: "Transport", amount: 100 },
];

const output3 = arr3.reduce((acc, curr) => {
  acc = acc + curr.amount;
  return acc;
}, 0);
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

const output5 = arr5.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, "");

console.log(output5, "output5");
