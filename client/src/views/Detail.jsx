import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, []);

  //this is the details page, where a user may click on a dashboard product link to view their details

  return (
    <div id="detailsStyling">
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button type="button" class="btn btn-light">
        <Link id="editHomeButtons" to={"/products/" + product._id + "/edit"}>
          Edit
        </Link>
      </button>{" "}
      <button type="button" class="btn btn-light">
        <Link id="editHomeButtons" to={"/api/products"}>
          Home
        </Link>
      </button>
    </div>
  );
};

export default Detail;
