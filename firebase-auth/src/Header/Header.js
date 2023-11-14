import { faEnvelope, faHome, faMoon, faRemove, faSignOut, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth, signOut } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';
import { UserContext } from '../App';

const auth = getAuth(app);

const Header = () => {
    const userData = useContext(UserContext);
    const { user, setUser, mood, setMood } = userData;

    const { displayName, photoURL, email } = user;
    const [profileOpen, setprofileOpen] = useState(false);

    //Sign Out
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                setprofileOpen(false);
                alert('Successfully Sign Out');
            })
            .catch((err) => {
                setUser({});
            })
    }

    return (
        <div>
            <header className='px-2 md:px-10 py-4 bg-slate-900 text-white'>
                <nav className='flex justify-between items-center'>
                    <h1 className='text-xl font-medium'>My Firebase App</h1>

                    <div className='flex items-center gap-4'>
                        <Link className='hidden md:block text-xs bg-blue-700 px-4 py-2 rounded' to='/'>Home</Link>

                        {
                            !user.uid ?

                                <Link to='/register' className='text-xs bg-blue-700 px-4 py-2 rounded' title='Register'>Register</Link>

                                :

                                <>
                                    <button onClick={() => setprofileOpen(!profileOpen)} className='text-xl bg-blue-700 w-10 h-10 rounded-full' title='Profile'>
                                        {
                                            user.photoURL ? //if Condition
                                                <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                                                : //else Condition
                                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                        }
                                    </button>
                                </>
                        }
                    </div>
                </nav>
            </header>


            {/* This is profile */}
            <div className={`absolute z-50 duration-700 ease-in break-all bg-blue-900 text-white md:w-1/4 min-h-screen p-5 mt-2 text-left ${profileOpen ? 'top-16 left-0' : 'top-16 left-[-330px]'}`}>

                <button onClick={() => setprofileOpen(false)} className='absolute top-2 shadow-xl right-2 border rounded-full h-4 w-4 flex justify-center items-center p-3 hover:bg-red-800 text-red-600 hover:text-white'><FontAwesomeIcon className='font-bold' icon={faRemove}></FontAwesomeIcon></button>
                <div className='flex items-center gap-4 mt-2 mb-4'>
                    <img className='w-16 h-16 rounded-full' title='User Image' src={photoURL} alt="" />
                    <div>
                        <h1 className='font-bold text-xl'>{displayName}</h1>
                    </div>
                </div>
                {
                    user.email ?
                        <h1><FontAwesomeIcon className='mr-1' icon={faEnvelope}></FontAwesomeIcon> {email}</h1>
                        :
                        <h1 className='text-red-500 font-medium'>Email dosen't exist</h1>
                }

                <Link to='/' className='flex items-center text-xl text-left bg-blue-900 border w-full px-4 py-1 rounded-full mt-5 hover:bg-red-800 md:hidden' title='Sign Out'>
                    <span><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></span>
                    <span className='ml-3 text-base font-medium'>Home</span>
                </Link>

                <div className='mt-4'>
                    {
                        mood ?
                            <button onClick={() => setMood(false)} className='flex items-center text-black text-xl text-left bg-white w-full px-4 py-1 rounded-full mt-10 hover:bg-blue-800 hover:text-white' title='Sign Out'>
                                <span><FontAwesomeIcon icon={faSun}></FontAwesomeIcon></span>
                                <span className='ml-3 text-base font-medium'>Day Mood</span>
                            </button>
                            :
                            <button onClick={() => setMood(true)} className='flex items-center text-xl text-left bg-slate-800 w-full px-4 py-1 rounded-full mt-10 hover:bg-slate-900' title='Sign Out'>
                                <span><FontAwesomeIcon icon={faMoon}></FontAwesomeIcon></span>
                                <span className='ml-3 text-base font-medium'>Night Mood</span>
                            </button>
                    }
                </div>

                <button onClick={handleSignOut} className='flex items-center text-xl text-left bg-red-500 w-full px-4 py-1 rounded-full mt-5 hover:bg-red-800' title='Sign Out'>
                    <span><FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon></span>
                    <span className='ml-3 text-base font-medium'>Sign Out</span>
                </button>

            </div>
        </div>
    );
};

export default Header;