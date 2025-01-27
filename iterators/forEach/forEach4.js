const orders = [
  {
    orderId: 1,
    userId: 101,
    items: [
      { productId: 1, quantity: 2, price: 10 },
      { productId: 2, quantity: 1, price: 20 },
    ],
  },
  {
    orderId: 2,
    userId: 102,
    items: [
      { productId: 3, quantity: 1, price: 15 },
      { productId: 4, quantity: 3, price: 5 },
    ],
  },
];

orders.forEach((data) => {
  const orderValue = data.items.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  console.log(`OrderId ${data.orderId} Ordervalue: ${orderValue}`);
});
