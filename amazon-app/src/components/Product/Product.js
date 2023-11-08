import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleShoppingCart }) => {
    const { name, price, img, stock, category, ratings } = product;
    return (
        <div className='border rounded relative'>
            <div className='relative'>
                <img className='w-full h-52 rounded' src={img} alt="" />
                <h1 className='absolute right-0 bottom-0 text-xs opacity-60 font-medium'>Category: {category}</h1>
                <h1 className='absolute top-0 p-1 bg-yellow-500 text-white font-medium'>${price}</h1>
            </div>
            <div className='p-4 mb-8'>
                <h1 className='text-xl opacity-80 font-medium'>{name}</h1>
                <div className='flex justify-between'>
                    <p className='text-lg opacity-90'>Price: ${price}</p>
                    <p>|</p>
                    <p className='text-lg opacity-90'>Available: {stock}</p>
                </div>
                <p className='text-yellow-500 opacity-95'>Ratings: {ratings} star</p>
            </div>
            <button onClick={()=> handleShoppingCart(product)} className='absolute bottom-0 bg-blue-700 w-full py-2 text-white font-medium rounded-b hover:bg-blue-800'>
                <span className='mr-4'>Add to Cart</span>
                <FontAwesomeIcon className='text-yellow-400' icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;