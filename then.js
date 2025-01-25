console.log("a");

const getProducts = () => {
  const URL = "https://dummyjson.com/products";
  const response = fetch(URL);
  response.then((item) => {
    item.json().then((item) => {
      console.log(item.total, "item");
      console.log("b");
      console.log("c");
    });
  });
  console.log("f");
  console.log("g");
};

setTimeout(() => {
  getProducts();
}, 5000);

console.log("d");
console.log("e");
