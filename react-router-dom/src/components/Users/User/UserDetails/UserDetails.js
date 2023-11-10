import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {MapPinIcon} from '@heroicons/react/24/solid'

const UserDetails = () => {
    const userDetails = useLoaderData();
    const { name, id, email, phone, username, address } = userDetails;
    console.log(userDetails)
    return (
        <div className='w-10/12 mx-auto bg-slate-800 text-white p-10 text-left font-medium min-h-screen'>
            <h1 className='text-3xl opacity-90 text-center mb-10'> {name}</h1>
            <div className='flex justify-around'>
                <div>
                    <p>Id: {id}</p>
                    <p>User Name: {username}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Email: {email}</p>
                </div>

                <div>
                    <h1 className='text-xl opacity-90 mb-4 flex items-center gap-1'><MapPinIcon className='h-5 w-5'></MapPinIcon> Address</h1>
                    <p>City: {address.city}</p>
                    <p>Street: {address.street}</p>
                    <p>Zipcode: {address.zipcode}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
