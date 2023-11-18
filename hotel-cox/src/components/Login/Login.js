import React, { useContext, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const Login = () => {

    const { logInUser, googleSIgnIn } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(result => {
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
                console.log(result.user)
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message);
            })
    }
    return (
        <div className='register-cover bg-cover min-h-screen bg-no-repeat relative rounded'>

            <div className='w-[95%] ml-2 mr-2 md:w-1/2 bg-slate-200 absolute top-[5%] md:left-[50%] md:translate-x-[-50%] px-10 py-5 rounded shadow-lg'>
                <h1 className='font-semibold text-xl mb-4 text-black'>Login Now</h1>
                <form onSubmit={handleCreateUser}>

                    <div>
                        <label className='text-medium text-slate-900 px-1 font-medium text-xs'>Email</label>
                        <input className='border-2 rounded outline-none w-full py-2 px-4 font-medium' type="email" name="email" id="" placeholder='sakil@example.com' />
                    </div>

                    <div>
                        <label className='text-medium text-slate-900 px-1 font-medium text-xs'>Password</label>
                        <input className='border-2 rounded outline-none w-full py-2 px-4 font-medium' type="password" name="password" id="" placeholder='@#xyyz...' />
                    </div>

                    <p className='font-medium mb-4'><button className='text-yellow-600 underline text-xs'>Forgot Password?</button></p>

                    <p className='text-red-600 opacity-90 font-medium'>{error}</p>

                    <button className='w-full bg-indigo-900 hover:bg-indigo-950 text-white py-2 rounded font-medium mt-4' type="submit">Login</button>
                </form>

                <p className='font-medium'><small className='text-yellow-600'>New in here? Create an account?</small> <small><Link className='underline text-indigo-900' to='/register'>Register</Link></small></p>
                <div className='divider font-medium text-xs text-slate-800'>OR</div>

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

export default Login;