import React from 'react';
import { SiYourtraveldottv } from "react-icons/si";
import { NavLink } from 'react-router-dom';

const Header = () => {

    const navBarLink = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "News", path: "/" },
        { id: 3, name: "Destination", path: "/" },
        { id: 4, name: "Blog", path: "/" },
        { id: 5, name: "Contact", path: "/" },
    ]
    return (
        <div className='flex justify-between items-center py-4 px-10 mb-5 shadow'>
            <h1 className='text-2xl font-bold flex items-center gap-1'> <SiYourtraveldottv className='text-3xl text-rose-500'></SiYourtraveldottv> Travellers</h1>
            <div className='text-base-200 w-[30%]'>
                <input className='px-4 py-2 w-full bg-transparent border rounded-lg outline-none' type="text" name="" placeholder="&#128269; Search your destination" id="" />
            </div>

            <ul className='flex items-center gap-3'>
                {
                    navBarLink.map((link, index) => <li key={index}>
                        <NavLink className='px-4 py-1 rounded hover:bg-rose-800 focus:bg-rose-900' to={link.path}>
                            {link.name}
                        </NavLink>
                    </li>)
                }

                <button className='px-4 py-1 rounded hover:bg-rose-800'>Login</button>
            </ul>

        </div>
    );
};

export default Header;