const sum = (x) => {
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };
};

const result = sum(1)(2)(3);
console.log(result, "res");
