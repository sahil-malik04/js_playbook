const data = [
  {
    name: "michael",
    marks: 80,
  },
  {
    name: "yon",
    marks: 65,
  },
  {
    name: "michael",
    marks: 25,
  },
];

const output = Object.values(
  data.reduce((acc, curr) => {
    if (!acc[curr.name]) {
      acc[curr.name] = { name: curr.name, frequency: 0, marks: 0 };
    }
    acc[curr.name].frequency += 1;
    acc[curr.name].marks += curr.marks;
    return acc;
  }, {})
);
