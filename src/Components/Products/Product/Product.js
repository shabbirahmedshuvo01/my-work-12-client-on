import React from 'react';

const Product = ({ tool }) => {
    const { name, price, img, quantity, description } = tool;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <h2 className="text-s">Price: ${price}</h2>
                <h2 className="text-xs">Quantity: {quantity}</h2>
                <p>{description}</p>
                <div className="flex justify-evenly">
                    <p className='mt-3'>Status : <span className='text-green-400'>In Stock</span></p>
                    <button className="btn mt-2">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;