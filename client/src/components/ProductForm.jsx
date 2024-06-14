import React, { useState } from "react";
import axios from "axios";

export default () => {
  //keep track of what is being typed via useState hook
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new person
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  //onChange to update title and price

  //this is our product form which is used for users to create a product.
  return (
    <form onSubmit={onSubmitHandler} id="formStyling">
      <div>
        <p>
          Welcome to our products page, below is where you can fill out which
          products you would like to post to our community page.
        </p>
      </div>
      <div>
        <h1>Product Form</h1>
      </div>
      <p>
        <label>Title: </label>
        <br />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </p>
      <p>
        <label>Price: </label>
        <br />
        <input
          type="Number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </p>
      <p>
        <label>Description: </label>
        <br />
        <textarea
          rows="4"
          cols="50"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </p>
      <button class="btn btn-light" type="submit">
        Submit
      </button>
    </form>
  );
};
