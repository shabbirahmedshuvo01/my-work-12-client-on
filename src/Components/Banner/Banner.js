import React from 'react';
import tool from '../../images/tools001.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img style={{ height: '400px', width: '400px' }} src={tool} />
                    <div>
                        <h1 className="text-5xl font-bold">Repair Tools Production House</h1>
                        <p className="py-6">We Provide our best element in products. <br /> The products are made by best meterials.The tools are so useful our deily life</p>
                        <button className="btn btn-primary">Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;