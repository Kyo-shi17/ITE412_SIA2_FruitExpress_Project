const { dequeue, hasMessages } = require("./queue");

function processOrders() {
  while (hasMessages()) {
    const order = dequeue();

    const result =
      order.amount <= 50000
        ? "Approved"
        : "Rejected";

    console.log(
      `Order request for ${order.customer} ` +
      `(Order #${order.orderId}) → ${result}`
    );
  }
}

module.exports = {
  processOrders
};