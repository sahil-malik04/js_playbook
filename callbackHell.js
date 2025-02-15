// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step 1 completed");
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log("Step 2 completed");
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   setTimeout(() => {
//     console.log("Step 3 completed");
//     callback();
//   }, 1000);
// }

// function step4(callback) {
//   setTimeout(() => {
//     console.log("Step 4 completed");
//     callback();
//   }, 1000);
// }

// // Callback hell
// step1(() => {
//   step2(() => {
//     step3(() => {
//       step4(() => {
//         console.log("All steps completed");
//       });
//     });
//   });
// });

//   solution
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 completed");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 completed");
      resolve();
    }, 1000);
  });
}

function step4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 4 completed");
      resolve();
    }, 1000);
  });
}

// Using promises
// step1()
//   .then(step2)
//   .then(step3)
//   .then(step4)
//   .then(() => console.log("All Steps completed"))
//   .catch((err) => console.log("Error", err));

// cleaner refactor
async function runSteps() {
  await step1();
  await step2();
  await step3();
  await step4();
}

runSteps().catch((err) => console.log("Err", err));
