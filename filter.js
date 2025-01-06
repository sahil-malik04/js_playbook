const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

const output1 = arr1.filter((item) => {
  return item % 2 == 0;
});

console.log(output1, "output1");

const arr2 = [
  { name: "John", marks: 45 },
  { name: "Jane", marks: 80 },
  { name: "Jim", marks: 65 },
  { name: "Jake", marks: 30 },
];

const output2 = arr2.filter((item) => {
  return item.marks < 50;
});

console.log(output2, "output2");

const arr3 = ["apple", "banana", "cherry", "date"];

const output3 = arr3.filter((item) => {
  return item.startsWith("b");
});

console.log(output3, "output3");

const arr4 = [12, 17, 22, 15, 30, 19];

const output4 = arr4.filter((item) => {
  return item < 18;
});

console.log(output4, "output4");

const arr5 = [10, 15, 20, 22, 30];

const output5 = arr5.filter((item) => item % 5 === 0);
console.log(output5, "output5");
