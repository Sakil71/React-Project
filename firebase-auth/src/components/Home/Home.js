import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const Home = () => {
    const { user, mood } = useContext(UserContext);
    return (
        <div className={`mx-auto ${mood ? 'text-white' : ''}`}>
            <main>

                {
                    user.uid ?
                        <div className='w-3/4 mx-auto my-10 text-left'>
                            <img className=' mb-4 w-96' src={user.photoURL} alt="" />
                            <h1 className='text-xl font-medium opacity-90'>{user.displayName}</h1>
                            <p>{user.email}</p>
                        </div>
                        :
                        <>
                            <h1 className='text-2xl font-bold my-20 text-red-800'>Please Sign In or Register</h1>

                            <p className='text-left mt-4 font-medium'>Already have an account? Please <Link className='text-blue-600 hover:text-blue-700' to='/signIn'>Sign In</Link></p>

                            <p className='text-left mt-4 font-medium'>New in here? Please <Link className='text-blue-600 hover:text-blue-700' to='/register'>Register</Link></p>
                        </>
                }
            </main>
        </div>
    );
};

export default Home;