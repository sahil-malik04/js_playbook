const products = [
  {
    productId: 1,
    reviews: [
      { rating: 4, comment: "Good product" },
      { rating: 5, comment: "Excellent" },
    ],
  },
  {
    productId: 2,
    reviews: [
      { rating: 3, comment: "Okay product" },
      { rating: 4, comment: "Good value" },
    ],
  },
];

products.forEach((item) => {
  const totalRatings = item.reviews.reduce((acc, curr) => acc + curr.rating, 0);
  const averageRating = totalRatings / item.reviews.length;

  console.log(`ID: ${item.productId}, Ratings: ${averageRating.toFixed(2)}`);
});
