import React from 'react';
import logo from '../../images/amazon-svgrepo-com.svg';

const Header = () => {
    return (
        <div className='p-4 flex justify-between items-center opacity-80 font-medium bg-[#1C2B35] text-white'>
            <div className='relative'>
                <h1 className='text-2xl'>Amazon</h1>
                <img className='w-20 h-14 absolute top-2' src={logo} alt="" />

            </div>
            <ul className='flex gap-8'>
                <li><a href="/order">Order</a></li>
                <li><a href="/Review">Order Review</a></li>
                <li><a href="/Introductory">Manage Introductory</a></li>
            </ul>
        </div>
    );
};

export default Header;