import React, { useState } from 'react';
import { FaBars, FaUser, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='sticky top-0 z-50 bg-base-100'>
            <nav className="navbar flex justify-between items-center bg-transparent px-10">
                <div className="">
                    <Link className="btn btn-ghost text-xl font-bold">Hotel Cox's</Link>
                </div>



                <div className={`${open ? 'top-0' : 'top-[-350px] md:top-5'} absolute duration-1000 w-full md:w-auto left-[50%] translate-x-[-50%] px-20 md:px-0 py-10 md:py-0 bg-indigo-950 md:bg-transparent z-10`}>
                    <ul className='md:flex gap-4 font-medium text-sm'>

                        <li><Link className='px-8 py-2 border hover:bg-blue-950 bg-transparent hover:text-white rounded-md cursor-pointer mb-4' to='/home'>Home</Link></li>

                        <li><Link className='px-8 py-2 border hover:bg-blue-950 bg-transparent hover:text-white rounded-md cursor-pointer mb-4' to='/trips'>Trips</Link></li>

                        <li><Link className='px-8 py-2 border hover:bg-blue-950 bg-transparent hover:text-white rounded-md cursor-pointer mb-4' to='/login'>Sign In</Link></li>

                        <li><Link className='px-8 py-2 border hover:bg-blue-950 bg-transparent hover:text-white rounded-md cursor-pointer mb-4' to='/register'>Register</Link></li>
                    </ul>
                </div>



                <div className="flex justify-center items-center gap-5">
                    <div className="dropdown dropdown-end border rounded-full">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item bg-blue-700 text-white">8</span>
                            </div>
                        </label>

                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-transparent border shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg text-white">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn bg-blue-700 btn-block text-white hover:bg-blue-800">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown dropdown-end border rounded-full">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className=" flex justify-center items-center rounded-full">
                                <span><FaUser></FaUser></span>
                            </div>
                        </label>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-transparent border text-white">

                            <li>
                                <Link className="justify-between hover:text-blue-700">
                                    Profile
                                    <span className="badge bg-blue-700 text-white">New</span>
                                </Link>
                            </li>

                            <li><Link className='hover:text-blue-700'>Settings</Link></li>
                            <li><button className='text-red-700 hover:text-red-400'>Logout</button></li>
                        </ul>
                    </div>

                    <div onClick={() => setOpen(!open)} className='md:hidden h-12 w-12 rounded-full bg-transparent border flex justify-center items-center cursor-pointer z-50'>
                        {
                            open ? <FaWindowClose className='text-red-500 rounded-full'></FaWindowClose> : <FaBars></FaBars>
                        }
                    </div>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;