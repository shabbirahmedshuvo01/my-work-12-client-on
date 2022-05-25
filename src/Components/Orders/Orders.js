import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Orders = () => {
    const [user, loading, error] = useAuthState(auth);

    const { id } = useParams();
    const [perTool, setPerTool] = useState({});
    const [numberOne, setNumberOne] = useState(0);
    let quantityElemnt;
    let errorElement;

    let wantedRef = useRef(0);



    const setNew = () => {
        let newOne = wantedRef.current.value;
        setNumberOne(newOne)
    }

    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPerTool(data)
            })
    }, [])

    let updatedQuantity = parseFloat(perTool.quantity) - parseFloat(numberOne);


    const handleOrder = event => {
        event.preventDefault();

        const tools = {
            toolId: perTool._id,
            toolName: perTool.name,
            toolQuantity: numberOne,
            toolBuyer: user.email,
            buyerName: user.displayName
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tools)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }



    if (perTool.quantity < updatedQuantity) {
        errorElement = <p className='text-red-500 text-center'>please! See our sotck and order!!!</p>

    }

    if (numberOne.length <= 2) {
        errorElement = <p className='text-red-500 text-center'>Hey Mr: stay in limit</p>
    }



    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='card w-full max-w-sm shadow-2xl bg-base-100 text-center'>
                <form onSubmit={handleOrder}>
                    <h2 className='text-xl'>Name: {user.displayName}</h2>
                    <h2 className='text-xl'>Email: {user.email}</h2>
                    <br />
                    <h2 className='text-xl font-bold'>Your selected product : {perTool.name}</h2>
                    <h2 className='font-bold'>In Stock : {perTool.quantity}</h2>
                    <h2 className='font-bold'>Order Quantity : {updatedQuantity}</h2>
                    <h5 className='font-bold'>Per Tools $: {perTool.price}</h5>
                    <h6 className='font-bold'>Status: <span className='text-success'>In Stock</span></h6>
                    <p>{perTool.description}</p>
                    <input className='input input-bordered' type="number" ref={wantedRef} placeholder='Update Quantity' required />
                    {errorElement}
                    <br />
                    <input type="submit" value="submit" className=" btn btn-primary mt-5" />
                </form>
                <button onClick={() => setNew()} className='btn mt-5'>Update</button>
            </div>
        </div>
    );
};

export default Orders;