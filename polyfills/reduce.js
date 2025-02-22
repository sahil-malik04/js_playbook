const arr = [1, 5, 10];

// polyfill
Array.prototype.customReduce = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const customResult = arr.customReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(customResult, "customResult");
