import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const {name,price,img,seller,quantity} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>Name : {name}  </h2>
        </div>
    );
};

export default Product;