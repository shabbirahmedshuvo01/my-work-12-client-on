import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()



    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    if (user) {
        navigate("/")
        console.log(user)
    }


    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);

    };
    return (

        <div className='flex h-screen justify-center items-center'>
            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className='text-2xl text-center font-bold'>Log In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" className="input input-bordered" placeholder='Email' {...register("email")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" className="input input-bordered" placeholder='Password' {...register("password")} />
                            <label className="label">
                                <p><small>New to Doctors Portal? <Link className='text-primary' to="/register">Create new account</Link></small></p>
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

export default Login;