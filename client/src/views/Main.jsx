import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import axios from "axios";

const Main = (props) => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, []);
  //to delete a product from the server we use this code.
  const removeFromDom = (productId) => {
    setProducts(products.filter((product) => product._id !== productId));
  };

  //this is returning the product form and product list at the bottom.
  return (
    <div id="detailsStyling">
      <ProductForm />
      <hr />
      {loaded && (
        <ProductList products={products} removeFromDom={removeFromDom} />
      )}
    </div>
  );
};
export default Main;
