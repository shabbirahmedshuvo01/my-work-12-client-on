import React from 'react';
import shuvo from '../../images/about/dekstop.1.jpg'

const MyProfileWork = () => {
    return (
        <div>
            <div className='flex flex-wrap gap-40'>
                <div className='mx-20 mt-10'>
                    <h2>Shabbir Ahmed Shuvo</h2>
                    <br />
                    <p>make a moment a lasting conveyable memory. Let us help build your tribe. <br />We love what we do and we do what our clients love and work with great <br /> clients all over the world to create thoughtful and purposeful websites</p>
                    <li>Student At : Mymensing Polytechnic Institute</li>
                    <li>Studyding at: 3rd Year </li>
                    <li>Hobby: Learn Somthing new.</li>
                    <li>Job experience: Lotto at salesman</li>
                    <li>Home: Mymensing</li>
                    <li>Ssc Batch: 2019</li>
                </div>
                <div>
                    <img style={{ height: '400px', width: '400px' }} src={shuvo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MyProfileWork;