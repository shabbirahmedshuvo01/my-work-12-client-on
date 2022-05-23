import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('Tools.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Repair Tools</h3>
                <h2 className='text-4xl mt-2'>We provide Best tools</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
                {
                    tools.map(tool => <Product
                        key={tool._id}
                        tool={tool}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;