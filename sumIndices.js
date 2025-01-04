const arr = [10, 12, 15, 80];
const output = [];

arr.forEach((item, index) => {
  if (index < arr.length - 1) {
    output.push(item + arr[index + 1]);
  }
});

console.log(output);
