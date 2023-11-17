import React, { useContext, useState } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import { faCircleXmark, faUser, faBarsProgress } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            navigate('/login');
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

    return (
        <div>
            <nav className='flex justify-between items-center bg-blue-950 text-white py-4 px-10 mb-10'>
                <h1 className='text-2xl font-semibold'>My Secret App</h1>
                <div onClick={()=>setOpen(!open)} className='md:hidden cursor-pointer'>
                    {
                        open ? <FontAwesomeIcon className='text-xl' icon={faCircleXmark}></FontAwesomeIcon> :  <FontAwesomeIcon icon={faBarsProgress}></FontAwesomeIcon>
                    }
                </div>
                <ul className={`absolute md:static font-medium flex flex-col md:flex-row text-left md:items-center gap-5 duration-1000 bg-blue-950 md:bg-transparent px-4 pt-10 md:px-0 md:pt-0 min-h-screen md:min-h-0 z-50 ${open ? 'left-0 top-16 ' : 'left-[-150px] top-16'}`}>

                    <li><Link className={`border px-4 py-1 bg-transparent hover:bg-sky-800 rounded focus:border-red-900`} to='/'>Home</Link></li>

                    <li><Link className={`border px-4 py-1 bg-transparent hover:bg-sky-800 rounded focus:border-red-900`} to='/assignment'>Assignment</Link></li>
                    {
                        user?.uid ?
                            <>
                                <li><button onClick={handleLogOut} className={`border px-4 bg-transparent hover:bg-sky-800 rounded focus:border-red-900`}>Log Out</button></li>

                                <li><Link to='/profile' className='w-10 h-10 rounded-full flex justify-center items-center border bg-transparent hover:bg-sky-800 focus:border-red-600'>
                                {
                                    user.photoURL?
                                    <img className='w-full rounded-full' src={user.photoURL} alt="" />
                                    :
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                }
                                </Link></li></>
                            :
                            <>
                                <li><Link className={`border px-4 py-1 bg-transparent hover:bg-sky-800 rounded focus:border-red-600`} to='/login'>Login</Link></li>
                                <li><Link className={`border px-4 py-1 bg-transparent hover:bg-sky-800 rounded focus:border-red-600`} to='/register'>Register</Link></li>
                            </>
                    }

                </ul>
            </nav>

        </div>
    );
};


// https://my-secret-app-a3932.firebaseapp.com/__/auth/handler
export default Header;