import React, { useState } from 'react';
import { SiYourtraveldottv } from "react-icons/si";
import { IoCloseCircle } from "react-icons/io5";
import { FaBarsProgress } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [open , setOpen] = useState(false);

    const navBarLink = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "News", path: "/" },
        { id: 3, name: "Destination", path: "/" },
        { id: 4, name: "Blog", path: "/" },
        { id: 5, name: "Contact", path: "/" },
    ]
    return (
        <div className='flex justify-between items-center py-4 px-3 md:px-10 mb-5 shadow relative'>
            <h1 className='text-2xl font-bold flex items-center gap-1'> <SiYourtraveldottv className='text-3xl text-rose-500'></SiYourtraveldottv> Travellers</h1>
            <div className='text-base-200 w-[40%] md:w-[30%] '>
                <input className='px-4 py-2 w-full bg-transparent border rounded-lg outline-none' type="text" name="" placeholder="&#128269; Search your destination" id="" />
            </div>

            <div onClick={()=>setOpen(!open)} className='md:hidden cursor-pointer z-50 text-2xl'>
                {
                    open ? <IoCloseCircle></IoCloseCircle> : <FaBarsProgress></FaBarsProgress>
                }
            </div>

            <ul onClick={()=> setOpen(!open)} className={`${open ? 'top-0' : 'top-[-250px]'} absolute left-0 duration-700 md:static flex flex-col md:flex-row w-full bg-rose-800  md:bg-transparent py-5 md:py-0 px-10 md:px-0 z-10 items-center gap-3`}>
                {
                    navBarLink.map((link, index) => <li key={index}>
                        <NavLink className='px-4 py-1 rounded hover:bg-rose-800 focus:bg-rose-900' to={link.path}>
                            {link.name}
                        </NavLink>
                    </li>)
                }

                <button className='px-4 py-1 rounded hover:bg-rose-800 hidden md:block'>Login</button>
            </ul>

        </div>
    );
};

export default Header;