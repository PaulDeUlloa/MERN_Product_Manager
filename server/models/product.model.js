const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String },
    price: { type: Number },
    description: { type: String },
  },
  { timestamps: true }
);

//This how we make our product model

module.exports.Product = mongoose.model("Product", ProductSchema);
