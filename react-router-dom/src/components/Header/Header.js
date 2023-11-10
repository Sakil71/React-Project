import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav className='flex justify-between items-center px-10 bg-slate-900 text-white font-medium py-4 mb-5'>
                <h1>React Router Dom</h1>

                <div onClick={() => setOpen(!open)} className='h-8 w-8 text-white cursor-pointer md:hidden'>
                    {
                        open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                    }

                </div>

                <div className={`flex flex-col md:flex-row min-h-screen md:min-h-0 bg-slate-900 gap-2 p-10 md:p-0 absolute md:static duration-700 ease-in text-left ${open ? 'left-0 top-10' : 'left-[-200px] top-10'}`}>

                    <NavLink style={({ isActive }) => isActive ? { backgroundColor: 'blue' } : undefined} className={`hover:bg-blue-800 px-5 rounded`} to='/home'>Home</NavLink>

                    <NavLink style={({ isActive }) => isActive ? { backgroundColor: 'blue' } : undefined} className={'hover:bg-blue-800 px-5 rounded'} to='/about'>About</NavLink>

                    <NavLink style={({ isActive }) => isActive ? { backgroundColor: 'blue' } : undefined} className={'hover:bg-blue-800 px-5 rounded'} to='blog'>Blog</NavLink>

                    <NavLink style={({ isActive }) => isActive ? { backgroundColor: 'blue' } : undefined} className={'hover:bg-blue-800 px-5 rounded'} to='/contact'>Contact</NavLink>

                    <NavLink style={({ isActive }) => isActive ? { backgroundColor: 'blue' } : undefined} className={'hover:bg-blue-800 px-5 rounded'} to='/users'>Users</NavLink>

                    <NavLink style={({ isActive }) => isActive ? { backgroundColor: 'blue' } : undefined} className={'hover:bg-blue-800 px-5 rounded'} to='/posts'>Posts</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;