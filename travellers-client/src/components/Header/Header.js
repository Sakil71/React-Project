import React, { useContext, useState } from 'react';
import { SiYourtraveldottv } from "react-icons/si";
import { IoCloseCircle } from "react-icons/io5";
import { FaBarsProgress, FaUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);

    const [open, setOpen] = useState(false);

    const navBarLink = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "News", path: "/" },
        { id: 3, name: "Destination", path: "/" },
        { id: 4, name: "Blog", path: "/" },
        { id: 5, name: "Contact", path: "/" },
    ]

    return (
        <div className='mb-5 '>
            <div className='flex justify-between items-center py-4 px-3 md:px-10 shadow relative'>

                <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer z-50 text-2xl'>
                    {
                        open ? <IoCloseCircle></IoCloseCircle> : <FaBarsProgress></FaBarsProgress>
                    }
                </div>

                <h1 className='text-2xl font-bold flex items-center gap-1'> <SiYourtraveldottv className='text-3xl text-rose-500'></SiYourtraveldottv> Travellers</h1>

                <div className='text-base-200 w-[40%] hidden md:block '>
                    <input className='px-4 py-2 w-full bg-transparent border rounded-lg outline-none' type="text" name="" placeholder="&#128269; Search your destination" id="" />
                </div>

                <div>
                    {
                        user && user?.uid ?
                            <Link to='/profile'>
                                <div className='w-10 h-10 rounded-full md:hidden'>
                                    {
                                        user?.photoURL ?
                                            <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                                            :
                                            <div className='w-10 h-10 rounded-full border flex items-center justify-center hover:text-slate-300'>
                                                <FaUser></FaUser>
                                            </div>
                                    }
                                </div>
                            </Link>
                            :
                            <Link to='/login' className='w-10 h-10 rounded-full border flex items-center justify-center font-bold hover:text-slate-300 md:hidden'>
                                ?
                            </Link>
                    }

                </div>

                <ul onClick={() => setOpen(!open)} className={`${open ? 'top-0' : 'top-[-250px]'} absolute left-0 duration-700 md:static flex flex-col md:flex-row w-full md:w-auto bg-rose-800  md:bg-transparent py-5 md:py-0 px-10 md:px-0 z-10 items-center gap-3`}>
                    {
                        navBarLink.map((link, index) => <li key={index}>
                            <Link className='px-4 py-1 rounded hover:bg-rose-800 focus:bg-rose-900' to={link.path}>
                                {link.name}
                            </Link>
                        </li>)
                    }

                    {
                        user && user?.uid ?
                            <Link to='/profile'>
                                <div className='w-10 h-10 rounded-full hidden md:block'>
                                    {
                                        user?.photoURL ?
                                            <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                                            :
                                            <div className='w-10 h-10 rounded-full border flex items-center justify-center hover:text-slate-300'>
                                                <FaUser></FaUser>
                                            </div>
                                    }
                                </div>
                            </Link>

                            :
                            <Link to='/login'>
                                <button className='px-4 py-1 rounded hover:bg-rose-800 hidden md:block focus:bg-rose-900'>Login</button>
                            </Link>
                    }
                </ul>

            </div>

            <div className='text-base-200 w-1/2 mx-auto md:hidden '>
                <input className='px-4 py-2 w-full bg-transparent border rounded-lg outline-none' type="text" name="" placeholder="&#128269; Search destination" id="" />
            </div>
        </div>
    );
};

export default Header;