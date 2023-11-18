import React, { useContext, useState } from 'react';
import { FaBars, FaRegBookmark, FaUser, FaWindowClose } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const Header = () => {
    const [open, setOpen] = useState(false);
    const { user, logOutUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                navigate('/login');
            })
            .catch(err => {

            })
    }

    return (
        <div className='sticky top-0 z-50 bg-base-100'>
            <nav className="navbar flex justify-between items-center bg-slate-300 px-10">
                <div className="">
                    <Link className="text-slate-800 text-xl font-bold">Hotel Cox's</Link>
                </div>



                <div className={`${open ? 'top-0' : 'top-[-350px] md:top-5'} absolute duration-1000 w-full md:w-auto left-[50%] translate-x-[-50%] px-20 md:px-0 py-5 md:py-0 bg-indigo-950 md:bg-transparent z-10  md:h-auto`}>
                    <ul onClick={()=>setOpen(false)} className='flex flex-col md:flex-row gap-4 font-medium text-sm'>

                        <Link className="text-slate-50 mb-4 text-2xl font-bold md:hidden">Hotel Cox's</Link>

                        <li className='mb-4'><Link className='px-8 py-2 border hover:bg-blue-950 bg-slate-200  text-black hover:text-white rounded-md cursor-pointer' to='/home'>Home</Link></li>

                        <li className='mb-4'><Link className='px-8 py-2 border hover:bg-blue-950 bg-slate-200  text-black hover:text-white rounded-md cursor-pointer' to='/trips'>Trips & Travels</Link></li>

                        <li className='mb-4'><Link className='px-8 py-2 border hover:bg-blue-950 bg-slate-200  text-black hover:text-white rounded-md cursor-pointer md:hidden' to='/book'>View Booked</Link></li>

                        {
                            !user && !user?.uid &&
                            <>
                                <li className='mb-4'><Link className='px-8 py-2 border hover:bg-blue-950 bg-slate-200 hover:text-white rounded-md cursor-pointer text-black' to='/login'>Sign In</Link></li>

                                <li className='mb-4'><Link className='px-8 py-2 border hover:bg-blue-950 bg-slate-200 hover:text-white rounded-md cursor-pointer text-black' to='/register'>Register</Link></li>
                            </>
                        }
                    </ul>
                </div>



                <div className="flex justify-center items-center gap-5">
                    <div className="hidden md:block dropdown dropdown-bottom md:dropdown-end border rounded-full text-slate-900">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <FaRegBookmark className='text-2xl'></FaRegBookmark>
                                <span className="badge badge-sm indicator-item bg-blue-700 text-white">8</span>
                            </div>
                        </label>

                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-transparent border shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg text-white">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <Link to="/book" className="btn bg-blue-700 btn-block text-white hover:bg-blue-800">View Booked</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown dropdown-end border rounded-full">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar flex justify-center items-center rounded-full">
                            {
                                user && user?.uid && user.photoURL ?
                                    <img className='rounded-full' src={user?.photoURL} alt="" />
                                    :
                                    <span className='text-black text-xl'><FaUser></FaUser></span>
                            }
                        </label>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-transparent border text-white">

                            <li>
                                <Link className="justify-between hover:text-blue-700">
                                    Profile
                                    <span className="badge bg-blue-700 text-white">New</span>
                                </Link>
                            </li>

                            <li><Link className='hover:text-blue-700'>Settings</Link></li>
                            {
                                user && user?.uid &&
                                <li><button onClick={handleLogOut} className='text-red-700 hover:text-red-400'>Logout</button></li>
                            }
                        </ul>
                    </div>

                    <div onClick={() => setOpen(!open)} className='md:hidden h-12 w-12 rounded-full bg-transparent border flex justify-center items-center cursor-pointer z-50'>
                        {
                            open ? <FaWindowClose className='text-red-500 rounded-full'></FaWindowClose> : <FaBars className='text-slate-900'></FaBars>
                        }
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;