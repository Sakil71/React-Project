import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Items from '../Items/Items';
import { deleteAll, removeFromDb } from '../../utilities/localStorage';

const Order = () => {
    const { previousData } = useLoaderData();
    const [cart, setCart] = useState(previousData);

    const removeData = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteAll();
    }

    return (
        <div className='md:flex justify-between w-11/12 mx-auto my-10 gap-10'>
            <div className='w-full'>
                {
                    cart.map(previous => <div key={previous.id} className='md:flex justify-between mb-3'>
                        <div className='flex items-center justify-between border rounded w-full p-2 bg-slate-700 text-white'>
                            <div className='flex items-center gap-4'>
                                <img className='w-20' src={previous.img} alt="" />
                                <div>
                                    <h1 className='text-xl font-medium opacity-80'>{previous.name}</h1>
                                    <h1 className='font-medium opacity-90'>Quantity: {previous.quantity}</h1>
                                    <p className='font-medium  text-red-300'>Price: {previous.price * previous.quantity}</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center bg-red-200 w-10 h-10 rounded-full cursor-pointer hover:bg-red-400'>
                                <button onClick={() => removeData(previous.id)}><FontAwesomeIcon className='text-red-700 text-xl' icon={faTrash}></FontAwesomeIcon></button>
                            </div>
                        </div>
                    </div>
                    )
                }
                <div className='text-center text-xl font-medium'>
                    {
                        cart.length === 0 && <h2>Empty Cart, Please <Link className='text-blue-600' to='/'>Shopping Now </Link></h2>
                    }
                </div>
            </div>
            <div className='bg-slate-800 text-white rounded p-2 w-1/4'>
                <Items cart={cart} clearCart={clearCart}></Items>
            </div>
        </div>
    );
};

export default Order;