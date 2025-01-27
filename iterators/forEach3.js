const users = [
  {
    name: "Alice",
    workouts: [
      { type: "Running", duration: 30, caloriesBurned: 300 },
      { type: "Cycling", duration: 45, caloriesBurned: 400 },
    ],
  },
  {
    name: "Bob",
    workouts: [
      { type: "Yoga", duration: 60, caloriesBurned: 250 },
      { type: "Running", duration: 20, caloriesBurned: 200 },
    ],
  },
];

users.forEach((item) => {
  const totalBurnedCalories = item.workouts.reduce(
    (acc, curr) => acc + curr.caloriesBurned,
    0
  );
  console.log(`User ${item.name}, burned ${totalBurnedCalories} calories`);
});
