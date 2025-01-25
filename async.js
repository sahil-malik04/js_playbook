console.log("a");

const timeoutFun = () => {
  setTimeout(() => {
    console.log("f");
  }, 0);
};

timeoutFun();

const getProducts = async () => {
  try {
    const URL = "https://dummyjson.com/products";
    const response = await fetch(URL);
    const result = await response.json();
    console.log(result.total, "Result");

    console.log("b");
    console.log("c");
  } catch (err) {
    console.log(err);
  }
};

getProducts();

console.log("d");
console.log("e");
