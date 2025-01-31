// modifies the orignal array
const arr = [10, 15, 25, 80];

const result = arr.splice(1, 2, 50, 22);

console.log(arr, "arr");
console.log(result, "result");

const arr2 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

arr2.splice(1);
console.log(arr2, "arr2");
