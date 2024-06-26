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

//* This method updates a product
module.exports.updateProduct = (request, response) => {
  Product.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updatedProduct) => response.json(updatedProduct))
    .catch((err) => response.status(400).json(err));
};

//* This method deletes a product
module.exports.deleteProduct = (request, response) => {
  Product.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.status(400).json(err));
};
