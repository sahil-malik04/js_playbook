async function fetchUserData(userId) {
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(`User ${userId}`), 1000);
  });
}

const userIds = [101, 102, 103];

const getUser = async (item) => {
  const result = await fetchUserData(item);
  console.log(result, "Result");
};

userIds.forEach((item) => {
    getUser(item);
});
