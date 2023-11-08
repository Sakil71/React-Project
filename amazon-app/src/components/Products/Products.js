import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('product.json').then(res => res.json()).then(data => setProducts(data))
    }, []);

    const handleShoppingCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart)
    }
    const totalPrice = cart.reduce((prev, curr)=> prev + curr.price, 0);
    const shippingCharges = (totalPrice * 0.02).toFixed(2);
    const shippingValue = parseFloat(shippingCharges);
    const tax = (totalPrice * 0.05).toFixed(2);
    const taxValue = parseFloat(tax);
    const grnadTotal = (totalPrice + shippingValue + taxValue).toFixed(2);
    const grnadTotalValue = parseFloat(grnadTotal);


    return (
        <div className='flex justify-between gap-5 w-[95%] mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[80%]'>
            {
                products.map(product => <Product 
                    key={product.id} 
                    product={product}
                    handleShoppingCart={handleShoppingCart}
                    ></Product>)
            }
            </div>
            
            <div className='w-[20%] px-4'> 
                <h1 className='text-2xl font-medium mb-4'>Order Summary</h1>
                <p className='text-xl opacity-80 font-medium mb-4'>Items Added: {cart.length}</p>
                 <p className='text-xl opacity-80 font-medium mb-4'>Total Price: ${totalPrice}</p>
                <p className='text-xl opacity-80 font-medium mb-4'>Shipping Charges: ${shippingValue}</p>
                <p className='text-xl opacity-80 font-medium mb-4'>Tax: ${taxValue}</p>
                <p className='text-2xl opacity-80 font-medium'>Grand Total: ${grnadTotalValue}</p>

                <div className='mt-8 flex flex-col'>
                    <button className='bg-yellow-700 w-full py-2 text-white font-medium rounded hover:bg-yellow-500 mb-4'>Proceed Checkout</button>

                    <button className='bg-red-700 w-full py-2 text-white font-medium rounded hover:bg-red-500'>Clear Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Products;