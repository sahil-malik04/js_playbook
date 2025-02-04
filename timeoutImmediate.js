setTimeout(() => {
  console.log("The set timeout function");
});

setImmediate(() => {
  console.log("The set immediate function");
});

process.nextTick(() => {
  console.log("this is process next tick function");
});

console.log("the sync code");