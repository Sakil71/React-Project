import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User/User';

const Users = () => {
    const allUsers = useLoaderData();
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='text-2xl font-medium'>Our Users List: {allUsers.length}</h1>
            <div className='grid md:grid-cols-3 my-10 gap-5'>
            {
                allUsers.map(user => <User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;