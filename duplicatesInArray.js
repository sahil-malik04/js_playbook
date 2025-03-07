const findDuplicates = (arr) => {
  const map = {};
  const duplicates = [];

  for (let str of arr) {
    map[str] = (map[str] || 0) + 1;
  }

  for (let key in map) {
    if (map[key] > 1) {
      duplicates.push(key);
    }
  }
  return duplicates;
};

const arr = ["bmw", "mercedes", "mahindra", "bmw", "audi", "mercedes"];
const result = findDuplicates(arr);

console.log(result);
