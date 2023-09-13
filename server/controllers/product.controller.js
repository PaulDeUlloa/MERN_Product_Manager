const { Product } = require("../models/product.model");
module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

//* This method gets all the products
module.exports.getAllProducts = (request, response) => {
  Product.find({})
    .then((products) => response.json(products))
    .catch((err) => response.status(400).json(err));
};

module.exports.getProduct = (request, response) => {
  Product.findOne({ _id: request.params.id })
    .then((product) => response.json(product))
    .catch((err) => response.status(400).json(err));
};

//* This method creates a product
module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  Product.create({ title, price, description })
    .then((product) => response.json(product))
    .catch((err) => response.status(400).json(err));
};
