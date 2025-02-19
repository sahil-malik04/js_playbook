const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 success!"), 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p2 fail!"), 3000);
//   setTimeout(() => resolve("p2 success!"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 success!"), 4000);
});

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
