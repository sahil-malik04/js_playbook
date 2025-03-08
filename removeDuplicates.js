const removeDuplicates = (arr) => {
  const newArr = [];
  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
};

const arr = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];
const result = removeDuplicates(arr);
console.log(result, "res");
