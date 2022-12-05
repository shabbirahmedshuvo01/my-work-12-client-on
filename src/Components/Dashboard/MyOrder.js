import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [user, loading, error] = useAuthState(auth);



    useEffect(() => {
        if (user) {
            fetch(`https://my-work-12-server.onrender.com/order?toolBuyer=${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => { setOrders(data) });
        }
    }, [user])


    const handleDelete = toolId => {
        const procced = window.confirm('are you sure ?')
        if (procced) {
            const url = `https://my-work-12-server.onrender.com/order/:${toolId}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = orders.filter(now => now.toolId !== toolId);
                    setOrders(remaining)
                })
        }
    }


    return (
        <div>
            <h2 className='text-2xl'>My Orders : {orders.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>date</th>
                            <th>Item</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.buyerName}</td>
                                <td>{order.date}</td>
                                <td>{order.toolName}</td>
                                <td><button onClick={() => handleDelete(order.toolId)} className='btn btn-xs bg-red-500'>Delete</button></td>
                                <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs'>Pay</button></Link>}</td>
                                <td>{(order.price && order.paid) && <span className='btn btn-xs'>Paid</span>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrder;