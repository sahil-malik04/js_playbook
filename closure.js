function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter();
counter();

const arrowOuter = () => {
  let count = 0;
  return () => {
    count++;
    console.log(count);
  };
};

const arrowCounter = arrowOuter();
arrowCounter();
arrowCounter();
