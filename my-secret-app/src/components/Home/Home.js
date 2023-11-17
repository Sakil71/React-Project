import React, { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-medium'>Welcome to my secret app</h1>
                <h1>{user?.email}</h1>
            </div>

            <div className='mt-4'>
                <h1>{user?.displayName}</h1>
                <p>You can see my all research</p>
                <Link className='btn btn-outline' to='/research'>Research</Link>
            </div>
        </div>
    )
};

export default Home;