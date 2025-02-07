// problem 1
const obj = {
  name: "test-user",
};

const arr = [obj, obj, obj];

console.log(arr[0], "arr");

arr[1] = {};
console.log(arr[1]);

// problem 2
const obj1 = {
  name: "test-user",
};

const arr1 = [obj1, obj1, obj1];

arr1[1].name = "updated-user";
console.log(arr1, "arr1");
console.log(obj1, "obj1");
