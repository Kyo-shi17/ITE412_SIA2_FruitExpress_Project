let orders = [
  {
    id: 1,
    productId: 1,
    customerName: "Juan Dela Cruz",
    quantity: 2,
    totalAmount: 240,
    status: "Pending"
  }
];

function getOrders() {
  return orders;
}

function addOrder(order) {
  const newOrder = {
    id: orders.length + 1,
    ...order
  };

  orders.push(newOrder);

  return newOrder;
}

module.exports = {
  getOrders,
  addOrder
};