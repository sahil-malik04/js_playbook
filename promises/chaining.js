Promise.resolve(1)
  .then((res) => {
    console.log(res);
    throw new Error("Something went wrong");
  })
  .then(() => console.log("Success"))
  .catch((err) => console.log(err.message))
  .finally(() => console.log("Cleanup done"));
