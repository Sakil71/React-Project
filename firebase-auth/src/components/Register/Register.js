import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { AuthContext } from '../../contexts/UserContext';


const Register = () => {
    const { user, mood, createUser, updateUserProfile, signInGoogle, signInTwitter, signInGithub, emailVerify } = useContext(AuthContext);

    const [userError, setUserError] = useState('');
    const [success, setSucces] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';


    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        setUserError('');
        setSucces(false);

        createUser(email, password)
            .then(result => {
                updateUsersInfo(name);
                setSucces(true);

                navigate(from, {replace: true});

                emailVerify()
                    .then(() => {
                        alert("Email Verification sent on your email. please check your inbox or spam folder");
                    })
                form.reset();
            })
            .catch(error => {
                setUserError(error.message);
            })
    }

    //Update user Info
    const updateUsersInfo = (name) => {
        updateUserProfile(name)
            .then(() => {
                setSucces(true);
            })
            .catch(err => {
                setUserError(err.message);
            })
    }

    //Sign In With Google
    const signInWithGoogle = () => {
        signInGoogle()
            .then(result => {
                navigate(from, {replace: true});
                alert('Successfully Sign In With Google');
            })
            .catch(error => {
                setUserError(error.message);
            })
    }

    //Sign In With Github
    const signInWithGithub = () => {
        signInGithub()
            .then(result => {
                navigate(from, {replace: true});
                alert('Successfully Sign In With Github');
            })
            .catch(error => {
                setUserError(error);
            })
    }

    //sign In With Twitter
    const signInWithTwitter = () => {
        signInTwitter()
            .then(result => {
                navigate(from, {replace: true});
                alert('Successfully Sign In With Twitter');
            })
            .catch(error => {
                setUserError(error);
            })
    }



    return (
        <div className={`w-[96%] md:w-10/12 mx-auto text-center ${mood ? 'text-white' : ''}`}>

            <div>
                {
                    user?.uid ? //if Condition
                        <>
                            <h1 className='font-medium text-green-800 mt-5'>Congrats!! Your registration successfull.</h1>
                            <div className='gap-4 items-center justify-center flex mt-5'>
                                <p className=''>Go to </p>
                                <Link className='hidden md:block text-xs w-32 border text-white bg-blue-700 px-4 py-2 rounded' to='/'>Home</Link>
                            </div>

                        </>

                        :  //else Condition

                        <>
                            <h1 className='text-2xl font-medium my-5'>Please Register Here</h1>
                            <form onSubmit={handleForm} className='flex flex-col w-3/4 mx-auto'>
                                <input className='outline-none bg-slate-300 font-medium rounded px-4 py-2 mb-5' placeholder='Your Name' type="text" name="name" id="" required />
                                <input className='outline-none bg-slate-300 font-medium rounded px-4 py-2 mb-5' placeholder='Your Email' type="email" name="email" id="" required />
                                <input className='outline-none bg-slate-300 font-medium rounded px-4 py-2 mb-5' placeholder='Your Password' type="password" name="password" id="" required />

                                <p className='text-left font-medium text-red-600 mb-4'>{userError.slice(10)}</p>
                                {
                                    success && <p className='text-green-600 font-medium text-left mb-4'>Registration Successfull</p>
                                }

                                <button className='text-white py-2 bg-blue-700 hover:bg-blue-500 rounded' type="submit">Register</button>

                                <p className='text-left mt-4 font-medium'>Already have an account? Please <Link className='text-blue-600 hover:text-blue-700' to='/signIn'>Sign In</Link></p>
                            </form>

                            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

                            <div className='text-white'>

                                <button onClick={signInWithGoogle} className='text-xl bg-blue-700 w-10 h-10 rounded-full mr-5' title='Sign in with Google'><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></button>

                                <button onClick={signInWithGithub} className='text-xl bg-blue-700 w-10 h-10 rounded-full mr-5' title='Sign in with Github'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></button>

                                <button onClick={signInWithTwitter} className='text-xl bg-blue-700 w-10 h-10 rounded-full' title='Sign in with Twitter'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></button>
                            </div>
                        </>
                }

            </div>
        </div>
    );
};

export default Register;