const arr = [1, 5, 10];

// pollyfill
Array.prototype.customMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const customResult = arr.customMap((item, i, arr) => {
  return item * 3;
});

console.log(customResult, "customResult");
