const obj1 = {
  name: "test-user",
  profession: "Neurologist",
};

// shallow copy
const obj2 = { ...obj1 };

obj2.name = "new user";

// console.log(obj1, "obj1");
// console.log(obj2, "obj2");

const obj3 = {
  name: "test-user",
  profession: "Neurologist",
  emails: {
    primary: "test@gmail.com",
    secondary: "test12@gmail.com",
  },
};

// deep copy sol 1
// const obj4 = JSON.parse(JSON.stringify(obj3));

// obj3.emails.primary = "test1@gmail.com";

// console.log(obj3, "obj3");
// console.log(obj4, "obj4");

function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let copiedVal = Array.isArray(obj) ? [] : {};
  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    copiedVal[keys[i]] = deepCopy(obj[keys[i]]);
  }
  return copiedVal;
}

// deepc copy sol 2 (logic)
const result = deepCopy(obj3);

obj3.emails.primary = "test1@gmail.com";

console.log(obj3, "obj3");
console.log(result, "obj4");



