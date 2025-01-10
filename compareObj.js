const arr = [
  {
    name: "ABC",
    place: "CHDE",
    age: 20,
  },
  {
    name: "ABC",
    place: "CHD",
    age: 20,
  },
];

function areObjectsEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const result = areObjectsEqual(arr[0], arr[1]);

console.log(result, "result");
