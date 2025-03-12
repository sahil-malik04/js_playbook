const countOccurence = (name, letter) => {
  let count = 0;
  name.split("").forEach((item) => {
    if (item.toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  });
  return count;
};

const result = countOccurence("test", "t");
console.log(result, "result");
