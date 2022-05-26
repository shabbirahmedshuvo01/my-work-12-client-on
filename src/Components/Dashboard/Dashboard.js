import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {


    const [user, loading, error] = useAuthState(auth);


    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-purple-500'>welcome to your Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li>{user && <Link to="/dashboard">My Orders</Link>}</li>
                    <li>{user && <Link to="/dashboard/review">Add A Review</Link>}</li>
                    <li>{user && <Link to="/dashboard/profile">My Profile</Link>}</li>
                    <li><Link to="/dashboard/users">All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;