const arr = [1, 5, 10];

// polyfill
Array.prototype.customFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const customResult = arr.customFilter((item) => {
  return item % 2 === 0;
});

console.log(customResult, "customResult");
