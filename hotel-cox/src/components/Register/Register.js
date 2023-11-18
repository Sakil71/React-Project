import React, { useContext, useState } from 'react';
import './Register.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { AuthContext } from '../../UserContext/UserContext';

const Register = () => {

    const { createUser, updateUserProfile, googleSIgnIn } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password !== confirmPassword) {
            setError("Password dosen't match.");
            return;
        }

        createUser(email, password)
            .then(result => {
                updateUserProfile(name);
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(err => {
                setError(err.message);
            })
    }

    const handleGoogle = () => {
        googleSIgnIn()
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message);
            })
    }


    return (
        <div className='register-cover bg-cover min-h-screen bg-no-repeat relative rounded'>

            <div className='w-[95%] ml-2 mr-2 md:w-1/2 bg-slate-200 absolute top-[5%] md:left-[50%] md:translate-x-[-50%] px-10 py-5 rounded shadow-lg'>
                <h1 className='font-semibold text-xl mb-4 text-black'>Create account</h1>
                <form onSubmit={handleCreateUser}>

                    <div>
                        <label className='text-medium text-slate-900 font-medium px-1 text-xs'>Name</label>
                        <input className='border-2 rounded outline-none w-full py-2 px-4 font-medium' type="text" name="name" id="" placeholder='Shakil Ahamed' />
                    </div>



                    <div>
                        <label className='text-medium text-slate-900 font-medium px-1 text-xs'>Email</label>
                        <input className='border-2 rounded outline-none w-full py-2 px-4 font-medium' type="email" name="email" id="" placeholder='sakil@example.com' />
                    </div>


                    <div className='md:flex gap-4'>

                        <div>
                            <label className='text-medium text-slate-900 font-medium px-1 text-xs'>Password</label>
                            <input className='border-2 rounded outline-none w-full py-2 px-4 font-medium' type="password" name="password" id="" placeholder='@#xyyz...' />
                        </div>



                        <div>
                            <label className='text-medium text-slate-900 font-medium px-1 text-xs'>Confitm password</label>
                            <input className='border-2 rounded outline-none w-full py-2 px-4 font-medium' type="password" name="confirmPassword" id="" placeholder='@#xyyz...' />
                        </div>

                    </div>

                    <p className='text-red-600 opacity-90 font-medium'>{error}</p>

                    <button className='w-full bg-indigo-900 hover:bg-indigo-950 text-white py-2 rounded font-medium mt-4' type="submit">Register</button>
                </form>
                <p className='font-medium'><small className='text-yellow-600'>Already have an account?</small> <small><Link className='underline text-indigo-900' to='/login'>Login</Link></small></p>
                <div className='divider font-medium text-slate-900 text-xs'>OR</div>

                <div className='flex gap-5 justify-center'>
                    <button onClick={handleGoogle} className='w-10 h-10 border-2 rounded-full flex justify-center items-center bg-base-200 hover:bg-base-100' title='Google'><FaGoogle></FaGoogle></button>

                    <button className='w-10 h-10 border-2 rounded-full flex justify-center items-center bg-base-200 hover:bg-base-100' title='Facebook'><FaFacebook></FaFacebook></button>

                    <button className='w-10 h-10 border-2 rounded-full flex justify-center items-center bg-base-200 hover:bg-base-100' title='Twitter'><FaTwitter></FaTwitter></button>

                    <button className='w-10 h-10 border-2 rounded-full flex justify-center items-center bg-base-200 hover:bg-base-100' title='Github'><FaGithub></FaGithub></button>
                </div>
            </div>

        </div>
    );
};

export default Register;