import React from 'react'
import axios from 'axios';
    
const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product, i) =>
                <p key={i}>{product.description}, {product.price}, {product.title}</p>
            )}
        </div>
    )
}
    
export default ProductList;