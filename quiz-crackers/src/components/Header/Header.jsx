import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center px-10 py-4 bg-slate-900'>
            <Link className='text-2xl text-white font-medium' to='/'>Quiz</Link>
            <div>
                <Link className=' font-medium mx-3 px-10 py-2 hover:bg-blue-400 bg-blue-600 rounded text-white' to='/'>Home</Link>
                <Link className=' font-medium mx-3 px-10 py-2 hover:bg-blue-400 bg-blue-600 rounded text-white' to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;