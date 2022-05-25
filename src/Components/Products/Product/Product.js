import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ tool }) => {
    const { _id, name, price, img, quantity, minimum, description } = tool;

    const navigate = useNavigate();
    const navigateToToolsDetail = id => {
        navigate(`tools/${id}`);
    }


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <h2 className="text-s">Price: ${price}</h2>
                <h2 className="text-s">Minimum Order: {minimum} Items</h2>
                <h2 className="text-xs">Quantity: {quantity}</h2>
                <p>{description}</p>
                <div className="flex justify-evenly">
                    <p className='mt-3'>Status : <span className='text-green-400'>In Stock</span></p>
                    <button onClick={() => navigateToToolsDetail(_id)} className="btn mt-2">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;