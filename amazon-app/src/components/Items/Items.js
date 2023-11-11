import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ cart, clearCart }) => {

    const quantity = cart.reduce((prev, curr) => prev + curr.quantity, 0)
    const price = cart.reduce((prev, curr) => prev + curr.price, 0);
    const totalPrice = price * quantity;
    const shipping = cart.reduce((prev, curr) => prev + curr.shipping, 0);
    const shippingCharges = shipping * quantity;
    const tax = parseFloat((totalPrice * 0.05).toFixed(2));
    const grnadTotal = parseFloat((totalPrice + shippingCharges + tax).toFixed(2));

    return (
        <div className='md:sticky top-16'>
            <h1 className='text-2xl font-medium mb-4'>Order Summary</h1>
            <p className='text-xl opacity-80 font-medium mb-4'>Items Added: {quantity}</p>
            <p className='text-xl opacity-80 font-medium mb-4'>Total Price: ${totalPrice}</p>
            <p className='text-xl opacity-80 font-medium mb-4'>Shipping Charges: ${shippingCharges}</p>
            <p className='text-xl opacity-80 font-medium mb-4'>Tax: ${tax}</p>
            <p className='text-2xl opacity-80 font-medium'>Grand Total: ${grnadTotal}</p>

            <div className='mt-8 flex flex-col'>
                <Link to='/order'><button className='bg-yellow-700 w-full py-2 text-white font-medium rounded hover:bg-yellow-500 mb-4'>Proceed Checkout</button></Link>

                <button onClick={() => clearCart()} className='bg-red-700 w-full py-2 text-white font-medium rounded hover:bg-red-500'>Clear Cart</button>
            </div>
        </div>
    );
};

export default Items;