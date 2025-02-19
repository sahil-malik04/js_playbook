const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 success!"), 2000);
});

const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p2 fail!"), 1000);
    setTimeout(() => resolve("p2 success!"), 3000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 success!"), 4000);
});

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res, "res");
  })
  .catch((err) => console.error(err));
