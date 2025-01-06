const arr1 = [1, 2, 3, 4, 5];

const output1 = arr1.map((item) => {
  return item * item;
});

console.log(output1, "output1");

const arr2 = ["apple", "banana", "cherry"];

const output2 = arr2.map((item) => {
  return item.toUpperCase();
});

console.log(output2, "output2");

const arr3 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const output3 = arr3.map((item) => {
  return item.name;
});

console.log(output3, "output3");

const arr4 = [10, 20, 30];

const output4 = arr4.map((item) => {
  return item * 80;
});

console.log(output4, "output4");

const arr5 = ["cat", "dog", "elephant"];

const output5 = arr5.map((item) => {
  return item.length;
});

console.log(output5, "output5");
