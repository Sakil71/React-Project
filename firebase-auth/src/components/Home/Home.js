import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SubHome from '../SubHome/SubHome';
import { AuthContext } from '../../contexts/UserContext';

const Home = () => {
    const { user, mood } = useContext(AuthContext);
    const albums = useLoaderData();

    return (
        <div className={`mx-auto ${mood ? 'text-white' : ''}`}>
            <main>

                {
                    user?.uid ?
                        <div className='my-5 w-[96%] mx-auto'>
                            <h1 className='text-xl font-bold mb-5'>News Feed</h1>
                            {
                                albums?.photos.map(album => <SubHome
                                    key={album.id}
                                    album={album}>
                                </SubHome>)
                            }
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