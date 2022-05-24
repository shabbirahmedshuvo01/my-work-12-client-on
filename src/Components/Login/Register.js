import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className='text-2xl text-center font-bold'>SignUp</h2>
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p><small>Already have an account? <Link className='text-primary' to="/login">Please Login</Link></small></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn' type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Register;