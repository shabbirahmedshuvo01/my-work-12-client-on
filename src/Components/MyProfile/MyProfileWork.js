import React from 'react';
import { Link } from 'react-router-dom';
import shuvo from '../../images/about/dekstop.1.jpg'

const MyProfileWork = () => {
    return (
        <div>
            <div className='text-center'>
                <div className='inline-block align-middle '>
                    <img style={{ height: '400px', width: '400px' }} src={shuvo} alt="" />
                </div>
                <div className='mx-20 mt-10'>
                    <h2>Shabbir Ahmed Shuvo</h2>
                    <p>make a moment a lasting conveyable memory. Let us help build your tribe. <br />We love what we do and we do what our clients love and work with great <br /> clients all over the world to create thoughtful and purposeful websites</p>
                    <li>Student At : Mymensing Polytechnic Institute</li>
                    <li>Studyding at: 3rd Year </li>
                    <li>Hobby: Learn Somthing new.</li>
                    <li>Job experience: Lotto at salesman</li>
                    <li>Home: Mymensing</li>
                    <li>Ssc Batch: 2019</li>
                    <Link to='https://final-project-2bb92.web.app/'>https://final-project-2bb92.web.app/</Link>
                    <br />
                    <Link to='https://my-dev-project63.web.app/'>https://my-dev-project63.web.app/</Link>
                    <br />
                    <Link to='https://programmingworkweb5-2388.netlify.app/'>https://programmingworkweb5-2388.netlify.app/</Link>
                </div>
            </div>
        </div>
    );
};

export default MyProfileWork;