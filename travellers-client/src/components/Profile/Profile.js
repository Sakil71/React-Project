import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Profile = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch(() => { })
    }

    return (
        <div className='md:w-3/4 mx-auto bg-slate-100 text-rose-700 px-10 py-4 rounded'>
            <div className='divider'><h1 className='font-medium text-center mb-5 text-2xl'>Profile</h1></div>
            {
                user && user?.uid &&
                <div className={`${user.photoURL ? 'flex' : ''} flex-col md:flex-row gap-5 justify-between items-center`}>
                    <img className='w-full md:w-1/2 rounded' src={user?.photoURL} alt="" />
                    <div className='break-all px-4'>
                        <h1 className='text-2xl md:text-4xl mb-5 font-bold'>{user?.displayName}</h1>
                        <h1 className='text-xl mb-4 font-medium'>{user?.email}</h1>

                        <button onClick={handleLogOut} className='py-2 w-full mt-10 border border-rose-800 rounded hover:bg-rose-800 text-rose-800 hover:text-white font-bold'>Log Out</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Profile;