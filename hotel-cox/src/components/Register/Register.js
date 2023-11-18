import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

const Register = () => {
    return (
        <div className='register-cover bg-cover min-h-screen bg-no-repeat relative'>

            <div className='w-[95%] ml-3 mr-2 md:w-1/2 bg-base-100 absolute top-[5%] md:left-[50%] md:translate-x-[-50%] px-10 py-5 rounded shadow-lg'>
                <h1 className='font-semibold text-xl mb-4'>Create account</h1>
                <form>
                    <fieldset className='bg-blue-950 rounded mb-4'>
                        <span className='text-medium text-white px-2'>Name</span>
                        <input className='border-2 rounded outline-none w-full py-1 px-4 font-medium' type="text" name="name" id="" placeholder='Shakil Ahamed' />
                    </fieldset>

                    <fieldset className='bg-blue-950 rounded mb-4'>
                        <span className='text-medium text-white px-2'>Email</span>
                        <input className='border-2 rounded outline-none w-full py-1 px-4 font-medium' type="email" name="email" id="" placeholder='sakil@example.com' />
                    </fieldset>

                    <div className='md:flex gap-4'>
                        <fieldset className='bg-blue-950 rounded mb-4'>
                            <span className='text-medium text-white px-2'>Password</span>
                            <input className='border-2 rounded outline-none w-full py-1 px-4 font-medium' type="password" name="password" id="" placeholder='@#xyyz...' />
                        </fieldset>

                        <fieldset className='bg-blue-950 rounded mb-4'>
                            <span className='text-medium text-white px-2'>Confitm password</span>
                            <input className='border-2 rounded outline-none w-full py-1 px-4 font-medium' type="password" name="confirmPassword" id="" placeholder='@#xyyz...' />
                        </fieldset>
                    </div>
                    <button className='w-full bg-indigo-900 hover:bg-indigo-950 text-white py-2 rounded font-medium mt-4' type="submit">Register</button>
                </form>
                <p className='font-medium'><small className='text-yellow-600'>Already have an account?</small> <small><Link className='underline' to='/login'>Login</Link></small></p>
                <div className='divider font-medium text-xs'>OR</div>

                <div className='flex gap-8 justify-center'>
                    <button className='w-10 h-10 border-2 rounded-full flex justify-center items-center bg-base-200 hover:bg-base-100' title='Google'><FaGoogle></FaGoogle></button>

                    <button className='w-10 h-10 border-2 rounded-full flex justify-center items-center bg-base-200 hover:bg-base-100' title='Facebook'><FaFacebook></FaFacebook></button>

                    <button className='w-10 h-10 border-2 rounded-full flex justify-center items-center bg-base-200 hover:bg-base-100' title='Twitter'><FaTwitter></FaTwitter></button>

                    <button className='w-10 h-10 border-2 rounded-full flex justify-center items-center bg-base-200 hover:bg-base-100' title='Github'><FaGithub></FaGithub></button>
                </div>
            </div>

        </div>
    );
};

export default Register;