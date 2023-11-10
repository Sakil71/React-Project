import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { name, id, email, username, phone } = user;
    return (
        <div className='shadow-xl rounded border p-4 text-left'>
            <h1 className='text-2xl font-medium opacity-70'>{name}</h1>
            <h2 className='font-medium opacity-80'>Email: <span className='text-sm opacity-60'>{email}</span></h2>
            <h2 className='font-medium opacity-80'>Pohone: <span className='text-sm opacity-60'>{phone}</span></h2>
            <h2 className='font-medium opacity-80 mb-5'>User Name: <span className='text-sm opacity-60'>{username}</span></h2>
            
            <div className='text-center'>
                <Link to={`/user/${id}`} className='bg-blue-800 text-white px-10 rounded'>Details</Link>
            </div>
        </div>
    );
};

export default User;