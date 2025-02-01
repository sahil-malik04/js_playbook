this.a = 10;

const getParam = () => {
  console.log(this.a);
};

getParam();

let user = {
  name: "test",
  getDetails() {
    console.log(this.name);
  },
};
user.getDetails();

// normal functions always point to its immediate parent

let user1 = {
  name: "test",
  childObj: {
    newName: "user",
    getDetails() {
      console.log(this.newName, "and", this.name);
    },
  },
};
user1.childObj.getDetails();

// in case of arrow funcitons, this will point to window object if there is no parent available as normal func,
// if parent normal func available then this refers to parent obj

let user2 = {
  name: "test",
  getDetails() {
    const nestedArrow = () => console.log(this.name);
    nestedArrow();
  },
};
user2.getDetails();
