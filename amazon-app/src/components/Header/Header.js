import React from 'react';
import logo from '../../images/amazon-svgrepo-com.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='p-4 flex justify-between items-center sticky top-0 z-50 opacity-80 font-medium bg-[#1C2B35] text-white'>
            <div className='relative'>
                <h1 className='text-2xl'>Amazon</h1>
                <img className='w-20 h-14 absolute top-2' src={logo} alt="" />

            </div>
            <ul className='flex gap-2'>
                <NavLink style={({ isActive }) => isActive ? { backgroundColor: 'blue' } : undefined} className={'px-4 rounded py-1 hover:bg-blue-700'} to="/home">Home</NavLink>
                <NavLink style={({ isActive }) => isActive ? { backgroundColor: 'blue' } : undefined} className={'px-4 rounded py-1 hover:bg-blue-700'} to="/order">Order</NavLink>
                <NavLink style={({ isActive }) => isActive ? { backgroundColor: 'blue' } : undefined} className={'px-4 rounded py-1 hover:bg-blue-700'} to="/review">Review</NavLink>
                <NavLink style={({ isActive }) => isActive ? { backgroundColor: 'blue' } : undefined} className={'px-4 rounded py-1 hover:bg-blue-700'} to="/introductory">Introductory</NavLink>
            </ul>
        </div>
    );
};

export default Header;