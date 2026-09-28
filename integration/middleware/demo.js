const {
  submitOrderApprovalRequest
} = require("./producer");

const {
  processOrders
} = require("./consumer");

console.log("=== FRUITEXPRESS MESSAGING MIDDLEWARE DEMO ===");

console.log("\n--- PRODUCER: SUBMITTING ORDERS ---");

submitOrderApprovalRequest(
  "Juan Dela Cruz",
  1001,
  1500
);

submitOrderApprovalRequest(
  "Maria Santos",
  1002,
  3200
);

submitOrderApprovalRequest(
  "Pedro Reyes",
  1003,
  65000
);

console.log("\n--- CONSUMER: PROCESSING QUEUED ORDERS ---");

processOrders();

console.log("\n=== DEMO COMPLETE ===");