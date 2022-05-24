import React from 'react';
import Review from './Review';
import some from '../../images/akok.jpeg'

const Reviews = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            reviews: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            img: some
        },
        {
            _id: 2,
            name: 'Winson Herry',
            reviews: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            img: some
        },
        {
            _id: 3,
            name: 'Winson Herry',
            reviews: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            img: some
        },
    ];

    return (
        <section className='my-28 text-center'>
            <div>
                <h4 className="text-xl text-primary font-bold">Our Ruguler Peoples are</h4>
                <h2 className='text-3xl mt-5'>What Our People Says</h2>
            </div>
            <div className='flex justify-between'>
                <div>
                    <img className='w-24 lg:w-48' src={"quote"} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;