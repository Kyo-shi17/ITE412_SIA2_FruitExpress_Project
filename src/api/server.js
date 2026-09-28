const express = require("express");

const {
  getProducts,
  addProduct
} = require("./products");

const {
  getOrders,
  addOrder
} = require("./orders");

const app = express();
const PORT = 3000;

app.use(express.json());

/*
  HOME / STATUS
*/
app.get("/", (req, res) => {
  res.json({
    message: "FruitExpress REST API is running."
  });
});

/*
  PRODUCT MODULE
*/

// GET /products
app.get("/products", (req, res) => {
  res.status(200).json(getProducts());
});

// POST /products
app.post("/products", (req, res) => {
  const { name, price, stock, farmer } = req.body;

  if (!name || price === undefined || stock === undefined || !farmer) {
    return res.status(400).json({
      message: "name, price, stock, and farmer are required."
    });
  }

  const product = addProduct({
    name,
    price,
    stock,
    farmer
  });

  res.status(201).json(product);
});

/*
  ORDER MODULE
*/

// GET /orders
app.get("/orders", (req, res) => {
  res.status(200).json(getOrders());
});

// POST /orders
app.post("/orders", (req, res) => {
  const {
    productId,
    customerName,
    quantity,
    totalAmount,
    status
  } = req.body;

  if (
    productId === undefined ||
    !customerName ||
    quantity === undefined ||
    totalAmount === undefined ||
    !status
  ) {
    return res.status(400).json({
      message:
        "productId, customerName, quantity, totalAmount, and status are required."
    });
  }

  const order = addOrder({
    productId,
    customerName,
    quantity,
    totalAmount,
    status
  });

  res.status(201).json(order);
});

app.listen(PORT, () => {
  console.log(`FruitExpress API running at http://localhost:${PORT}`);
});