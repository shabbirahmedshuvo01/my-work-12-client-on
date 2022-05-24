import React from 'react';
import some from '../../images/some.jpg'

const SectionTow = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img style={{ height: "600px", width: "400px" }} src={some} />
                <div>
                    <h1 className="text-5xl font-bold text-red-500 text-center">Warning...</h1>
                    <h1 className="text-4xl font-bold mt-5 text-center">DUTY TO WARN</h1>
                    <p className="py-6 mx-5">The first choice in designing a safe product is to eliminate a hazard by using a safer alternative in design. If that is not possible, an attempt should be made to reduce or mitigate the hazard by appropriate guarding. After exhausting these options, a warning should be used to warn against any residual risks. Eliminating a hazard by design and effective guarding are much more effective than a product warning in reducing a product liability risk.</p>
                </div>
            </div>
        </div>
    );
};

export default SectionTow;