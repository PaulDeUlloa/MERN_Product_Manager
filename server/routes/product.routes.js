const ProductController = require("../controllers/product.controller");
module.exports = function (app) {
  app.get("/api", ProductController.index);
  app.get("/api/products", ProductController.getAllProducts);
  app.post("/api/products", ProductController.createProduct);
  app.get("/api/products/:id", ProductController.getProduct);
  app.patch("/api/products/:id", ProductController.updateProduct);
  app.delete("/api/products/:id", ProductController.deleteProduct);
};

//? Need To make home route to all products
