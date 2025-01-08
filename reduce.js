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

const arr12 = [
  { category: "Electronics", price: 100 },
  { category: "Clothing", price: 50 },
  { category: "Electronics", price: 150 },
];

const output12 = Object.values(
  arr12.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = {
        [curr.category]: 0,
      };
    }
    acc[curr.category][curr.category] += curr.price;
    return acc;
  }, {})
);

console.log(output12, "output12");

const arr13 = ["apple", "banana", "apple", "orange", "banana", "apple"];

const output13 = arr13.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 0;
  }
  acc[curr] += 1;
  return acc;
}, {});

console.log(output13, "output13");

const arr14 = [
  { customerId: 1, amount: 200 },
  { customerId: 2, amount: 150 },
  { customerId: 1, amount: 100 },
];

const output14 = arr14.reduce((acc, curr) => {
  if (!acc[curr.customerId]) {
    acc[curr.customerId] = 0;
  }
  acc[curr.customerId] += curr.amount;
  return acc;
}, {});

console.log(output14, "output14");

const arr15 = [
  { type: "credit", amount: 500 },
  { type: "debit", amount: 200 },
  { type: "credit", amount: 300 },
];

const output15 = arr15.reduce((acc, curr) => {
  if (!acc[curr.type]) {
    acc[curr.type] = 0;
  }
  acc[curr.type] += curr.amount;
  return acc;
}, {});

console.log(output15, "output15");

const arr16 = [
  { id: 1, name: "Item A" },
  { id: 2, name: "Item B" },
  { id: 1, name: "Item A" },
];

const output16 = Object.values(
  arr16.reduce((acc, curr) => {
    if (!acc[curr.id]) {
      acc[curr.id] = { id: curr.id, name: curr.name };
    }
    return acc;
  }, {})
);

console.log(output16, "output16");

const arr17 = [
  { status: "pending", priority: "high" },
  { status: "completed", priority: "low" },
  { status: "pending", priority: "low" },
];

const output17 = arr17.reduce((acc, curr) => {
  if (!acc[curr.status]) {
    acc[curr.status] = { high: 0, low: 0 };
  }
  if (curr.priority === "high") {
    acc[curr.status].high += 1;
  } else {
    acc[curr.status].low += 1;
  }
  return acc;
}, {});

console.log(output17, "output17");

const arr18 = [
  { name: "John", department: "HR" },
  { name: "Alice", department: "Engineering" },
  { name: "Bob", department: "HR" },
];

const output18 = Object.values(
  arr18.reduce((acc, curr) => {
    if (!acc[curr.department]) {
      acc[curr.department] = {
        [curr.department]: 0,
      };
    }
    acc[curr.department][curr.department] += 1;
    return acc;
  }, {})
);

console.log(output18, "output18");

const arr19 = [
  { name: "Alice", score: 80 },
  { name: "Bob", score: 70 },
  { name: "Alice", score: 90 },
];

const output19 = Object.values(
  arr19.reduce((acc, curr) => {
    if (!acc[curr.name]) {
      acc[curr.name] = { name: curr.name, score: 0, count: 0 };
    }
    acc[curr.name].score += curr.score;
    acc[curr.name].count += 1;
    return acc;
  }, {})
).map((item) => ({
  name: item.name,
  average: item.score / item.count,
}));

console.log(output19, "output19");

const arr20 =  [
  { itemName: "Apple", quantity: 3 },
  { itemName: "Banana", quantity: 2 },
  { itemName: "Apple", quantity: 1 },
];

const output20 = arr20.reduce((acc, curr)=> {
      if(!acc[curr.itemName]){
        acc[curr.itemName] = 0;
      }
      acc[curr.itemName]+= curr.quantity;
      return acc;
}, {})

console.log(output20, "output20");

