import React from 'react';

const Summery = () => {
    return (
        <div>
            <div>
                <h2 className="text-center text-4xl mt-10 text-orange-500 font-bold">Our Business ratings... <br />
                    Trusted Persons are... </h2>
            </div>
            <div className="stats shadow bg-indigo-500 w-full mt-12">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title text-white">Total Deals</div>
                    <div className="stat-value text-white">25.6K</div>
                    <div className="stat-desc text-white">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title text-white">Dealership</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc text-white">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?w=128&h=128" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="stat-title text-white">Tasks done</div>
                    <div className="stat-desc text-white">31 tasks remaining</div>
                </div>

            </div>
        </div>
    );
};

export default Summery;