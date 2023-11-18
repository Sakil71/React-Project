import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-indigo-950 text-neutral-content">
            <aside className="">
                <h1 className='text-xl font-medium'>Hotel Cox's</h1>
                <p>&copy; 2023 - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-5 md:place-self-center md:justify-self-end">
                <div className='bg-transparent'>
                    <Link className='rounded-full hover:bg-indigo-800 w-10 h-10 border flex justify-center items-center'><FaFacebook className='text-2xl'></FaFacebook></Link>
                </div>

                <div className='bg-transparent'>
                    <Link className='rounded-full hover:bg-indigo-800 w-10 h-10 border flex justify-center items-center'><FaWhatsapp className='text-2xl'></FaWhatsapp></Link>
                </div>

                <div className='bg-transparent'>
                    <Link className='rounded-full hover:bg-indigo-800 w-10 h-10 border flex justify-center items-center'><FaTwitter className='text-2xl'></FaTwitter></Link>
                </div>

            </nav>
        </footer>
    );
};

export default Footer;