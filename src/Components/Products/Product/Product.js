import React from 'react';

const Product = ({ tool }) => {
    const { name, price, img, quantity, description } = tool;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div class="card-body">
                <h2 class="card-title">Name: {name}</h2>
                <h2 class="text-s">Price: ${price}</h2>
                <h2 class="text-xs">Quantity: {quantity}</h2>
                <p>{description}</p>
                <div class="flex justify-evenly">
                    <p className='mt-3'>Status : <span className='text-green-400'>In Stock</span></p>
                    <button class="btn mt-2">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;