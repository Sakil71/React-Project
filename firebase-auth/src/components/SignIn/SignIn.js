import { getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';
import { UserContext } from '../../App';

const auth = getAuth(app);

const SignIn = () => {
    const userData = useContext(UserContext);
    const { user, setUser } = userData;

    const [success, setSucces] = useState(false);
    const [error, setError] = useState('');
    const [resetEmail, setRestEmail] = useState('');

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        setSucces(false);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setSucces(true);
                console.log(user);
                form.reset();
            })
            .catch(err => {
                setError(err.message);
            })
    }

    const handleEmailBlur = (e) => {
        const blurEmail = e.target.value;
        setRestEmail(blurEmail);
    }

    const resetPassword = () => {
        if (!resetEmail) {
            alert("Please Input Your Email");
            setSucces(false);
        }
        sendPasswordResetEmail(auth, resetEmail)
            .then(() => {
                alert("Please check your inbox or spam folder");
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleVerifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert("Email verification link sent")
            })
            .catch(err => {
                setError(err.message);
            })
    }
    return (
        <div className='w-[96%] md:w-10/12 text-center mx-auto'>
            {
                user.uid ?
                <h1 className='font-medium text-green-800 mt-5'>Congrats!! Sign In successfull.</h1>
                    :
                    <>
                        <h1 className='text-2xl font-medium my-5'>Please Sign In Here</h1>
                        <form onSubmit={handleForm} className='flex flex-col w-3/4 mx-auto'>
                            <input onBlur={handleEmailBlur} className='outline-none bg-slate-300 font-medium rounded px-4 py-2 mb-5' placeholder='Your Email' type="email" name="email" id="" required />
                            <input className='outline-none bg-slate-300 font-medium rounded px-4 py-2 mb-5' placeholder='Your Password' type="password" name="password" id="" required />

                            <p className='text-left font-medium text-yellow-600 mb-4'>Forgot Your Password?
                                <button onClick={resetPassword} className='text-blue-600 ml-2'>Reset Now</button>
                            </p>

                            {
                                success && <p className='text-green-600 font-medium text-left mb-4'>Sign In Successfull</p>
                            }

                            <p className='text-red-600 font-medium text-left mb-4'>{error.slice(10)}</p>


                            <button className='text-white py-2 bg-blue-700 hover:bg-blue-500 rounded' type="submit">Sign In</button>

                            {
                                !user.emailVerified && user.uid && <p className='text-yellow-600 font-medium text-left mt-4'>Please Verify Your Email<button onClick={handleVerifyEmail} className='text-blue-600 ml-2'>Here</button></p>
                            }

                            {
                                !user.uid &&
                                <p className='text-left mt-4 font-medium'>New in here? Please <Link className='text-blue-600 hover:text-blue-700' to='/register'>Register</Link></p>
                            }
                        </form>
                    </>
            }
        </div>
    );
};

export default SignIn;