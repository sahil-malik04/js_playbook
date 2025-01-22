const obj1 = {
  name: "Testuser1",
  profession: "SEO Specialist",
  printName: function (hometown) {
    console.log(this.name + " " + this.profession + " " + hometown);
  },
};

const obj2 = {
  name: "Testuser2",
  profession: "Neurologist",
};

obj1.printName.call(obj2, "chd");
obj1.printName.apply(obj2, ["mumbai"]);
const result = obj1.printName.bind(obj2, "pune");
result();
