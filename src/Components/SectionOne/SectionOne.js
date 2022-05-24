import React from 'react';
import one from '../../images/bg0one.jpg'

const SectionOne = () => {
    return (
        <div className="hero min-h-screen" style={{
            background: `url(${one})`
        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Our Prodcuts have</h1>
                    <p className="mb-5">Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.Giving great service requires the right people and the right service tools.</p>
                    <button className='btn btn-primary'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;