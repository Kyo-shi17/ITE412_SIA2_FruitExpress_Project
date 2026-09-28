let products = [
  {
    id: 1,
    name: "Fresh Mangoes",
    price: 120,
    stock: 50,
    farmer: "Ornos Farm"
  },
  {
    id: 2,
    name: "Fresh Bananas",
    price: 80,
    stock: 40,
    farmer: "Ornos Farm"
  }
];

function getProducts() {
  return products;
}

function addProduct(product) {
  const newProduct = {
    id: products.length + 1,
    ...product
  };

  products.push(newProduct);

  return newProduct;
}

module.exports = {
  getProducts,
  addProduct
};