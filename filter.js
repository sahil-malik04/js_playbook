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

// level 2

const arr6 = [5, 8, 12, 19, 22];

const output6 = arr6
  .filter((item) => {
    return item % 2 === 0;
  })
  .map((item) => {
    return item / 2;
  });

console.log(output6, "output6");

const arr7 = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
];

const output7 = arr7.filter((item) => {
  return item.inStock;
});

console.log(output7, "output7");

const arr8 = ["hello", "world", "javascript", "map"];

const output8 = arr8
  .filter((item) => {
    return item.length > 5;
  })
  .map((data) => {
    return data.toUpperCase();
  });

console.log(output8, "output8");

const arr9 = [10, 25, 30, 50, 65];

const output9 = arr9
  .filter((item) => {
    return item % 5 === 0;
  })
  .map((data) => {
    return data * data;
  });

console.log(output9, "output9");
