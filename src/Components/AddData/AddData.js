import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddData = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://my-final-project115.herokuapp.com/tools`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log("result", result)

                if (result.acknowledged) {
                    toast.success('add item done')
                }
                else {
                    toast.error('failed to add')
                }

            })
    };

    return (
        <div className='w-50 mx-80'>
            <h2 className="text-2xl pl-20 font-bold mt-5">Add New Items</h2>
            <form className='flex flex-col w-80 mt-10 gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input className='input input-bordered' type="text" placeholder='name' {...register("name")} />
                <input className='input input-bordered' type="number" placeholder='price' {...register("price")} />
                <input className='input input-bordered' type="text" placeholder='image URL' {...register("img")} />
                <input className='input input-bordered' type="number" placeholder='quantity' {...register("quantity")} />
                <input className='input input-bordered' type="number" placeholder='minimum' {...register("minimum")} />
                <input className='input input-bordered' type="text" placeholder='description' {...register("description")} />
                <input className='btn btn-secondery' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AddData;