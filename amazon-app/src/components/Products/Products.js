import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Items from '../../Items/Items';
import { getDataFromLocalStorage, setDataInLocal } from '../../utilities/localStorage';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('product.json').then(res => res.json()).then(data => setProducts(data))
    }, []);

    useEffect(()=>{
        const existItem = getDataFromLocalStorage();
        const saveCart = [];
        for(const id in existItem){
            const saveItem = products.find(product => product.id === id);
            if(saveItem){
                const quantity = existItem[id];
                saveItem.quantity = quantity;
                saveCart.push(saveItem);
            }
        }
        setCart(saveCart);
    }, [products]);


    const handleShoppingCart = (selectedProduct) =>{
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart)
        setDataInLocal(selectedProduct.id)        
    }
    

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
            
            <div className='w-[20%] px-4 bg-slate-800 text-white rounded pt-2'> 
                <Items cart={cart}></Items>
            </div>
        </div>
    );
};

export default Products;