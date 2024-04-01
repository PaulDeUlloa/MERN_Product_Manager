import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
