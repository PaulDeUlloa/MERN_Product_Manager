import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//to delete a product from the server we use this code.
const ProductList = (props) => {
  const { removeFromDom } = props;

  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/products/" + productId)
      .then((res) => {
        removeFromDom(productId);
      })
      .catch((err) => console.error(err));
  };

  //this file is our list of products when a user creates a user it will appear here.
  return (
    <div id="allProductsStyling">
      <h2>All Products: </h2>
      {props.products.map((product, i) => {
        return (
          <p key={i}>
            <div id="listStyling">
              <Link
                id="allProductsAnchorTags"
                to={`/api/products/${product._id}`}
              >
                {product.title}
              </Link>{" "}
              <button
                onClick={(e) => {
                  deleteProduct(product._id);
                }}
              >
                Delete
              </button>
            </div>
          </p>
        );
      })}
    </div>
  );
};

export default ProductList;
