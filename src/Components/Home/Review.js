import React from 'react';

const Review = ({ review }) => {
    const { _id, name, reviews, location, img } = review;
    return (
        <div className="card lg:max-w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{reviews}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl">{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;