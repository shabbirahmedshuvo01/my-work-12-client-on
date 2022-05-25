import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Orders = () => {

    const { id } = useParams();
    const [perTool, setPerTool] = useState({});
    const [numberOne, setNumberOne] = useState(0);
    let quantityElemnt = perTool.quantity;

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

    return (
        <div>
            <div>
                <h2>Your selected product : {perTool.name}</h2>
                <h2>In Stock : {quantityElemnt + parseFloat(numberOne)}</h2>
                <h5>Per Tools $: {perTool.price}</h5>
                <h6>Status: <span className='text-success'>In Stock</span></h6>
                <h6>Supplier: {perTool.supply}</h6>
                <p>{perTool.description}</p>
                <input className='' type="number" name='setQuantity' ref={wantedRef} placeholder='Wanted' />
                <button onClick={() => setNew()} className='btn btn-primary'>Now</button>
                <div className='text-center'>
                    <Link to='/'>
                        <button className='btn btn-primary'>Proceed Stocking</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Orders;