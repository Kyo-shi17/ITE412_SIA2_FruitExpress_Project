const { enqueue } = require("./queue");

function submitOrderApprovalRequest(customer, orderId, amount) {
  const message = {
    customer,
    orderId,
    amount
  };

  enqueue(message);

  console.log(
    `Order request submitted: ${JSON.stringify(message)}`
  );
}

module.exports = {
  submitOrderApprovalRequest
};