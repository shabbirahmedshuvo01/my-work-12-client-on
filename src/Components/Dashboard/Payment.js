import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2DWFIh8TfUaVL3Xe8hmTCmJ4X8wkjJZswv5oDqZTowcj8qePuQ2Fq7U7Hc8UMEE40qcwKqOVx3WyfMFd3fIcW200jGmckJgY');

const Payment = () => {
    const { id } = useParams();
    const url = `https://lit-ocean-00679.herokuapp.com/order/${id}`

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET'
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }


    return (

        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title">Pay for : {order?.buyerName}</h2>
                    <h2 class="card-title">Pay for : {order?.toolName}</h2>
                    <p className='text-orange'>Order will be palced {order?.date}</p>
                    <p>Please pay: ${order?.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>

                </div>
            </div>
        </div>

    );
};

export default Payment;