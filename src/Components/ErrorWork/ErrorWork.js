import React from 'react';
import error from '../../images/errorWarn.jpeg'

const ErrorWork = () => {
    return (
        <section className='h-60' style={{
            background: `url(${error})`
        }}>
            <div className='text-center'>
                <h2 className="text-2xl text-red-500">This page is not found</h2>
                <p className='text-red-500'>Please try valid page</p>
            </div>
        </section>
    );
};

export default ErrorWork;