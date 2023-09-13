import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
    
const ProductList = (props) => {
    return (
        <div>
            <h2>All Products: </h2>
            {props.products.map( (product, i) =>{
                return (
                    <p key={i}>
                        <Link to={`/api/products/${product._id}`}>
                        {product.title}
                        </Link>
                    </p>
                );
            })}
        </div>
    )
}
    
export default ProductList;