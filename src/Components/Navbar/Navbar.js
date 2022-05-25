import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {


    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };


    const itemsSite = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li>{user && <Link to="/dashboard">Dashboard</Link>}</li>
        <li>{user ?
            <button className="btn btn-active btn-ghost" onClick={logout}>Sign Out</button> : <Link to="/login">Login</Link>}</li>
    </>

    return (
        <div>
            <div className="navbar bg-teal-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {itemsSite}
                        </ul>
                    </div>
                    <Link to='/'><a className="btn btn-ghost normal-case text-xl">Repair Tools</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {itemsSite}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;