// 1
function makeUser() {
  return {
    name: "john",
    ref: this,
  };
}

let res1 = makeUser();
console.log(res1.ref.name, "ref");

// sol
function makeUserSol() {
  return {
    name: "john",
    ref() {
      return this;
    },
  };
}

let res2 = makeUserSol();
console.log(res2.ref().name, "ref-sol");

// 2
const user = {
  name: "test",
  logMessage() {
    console.log(this.name);
  },
};

// setTimeout(user.logMessage, 1000);

// sol
setTimeout(function () {
  user.logMessage();
}, 1000);

// 3
const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  substract(a) {
    this.total -= a;
    return this;
  },
};

// sol
const result = calc.add(10).multiply(5).substract(30).add(10);
console.log(result.total, "result");
