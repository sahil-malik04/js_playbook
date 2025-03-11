// iterative approach
// const mergeArray = (arr1, arr2) => {
//   const mergedArr = [];
//   const maxLength = Math.max(arr1.length, arr2.length);
//   for (let i = 0; i < maxLength; i++) {
//     if (i < arr1.length) mergedArr.push(arr1[i]);
//     if (i < arr2.length) mergedArr.push(arr2[i]);
//   }
//   return mergedArr;
// };

const mergeArray = (arr1, arr2) => {
  const concat = arr1.concat(arr2);
  return concat;
};

const arr1 = ["7", "14", "21", "28", "35", "42", "49"];
const arr2 = ["56", "63", "70"];
const result = mergeArray(arr1, arr2);
console.log(result, "result");
