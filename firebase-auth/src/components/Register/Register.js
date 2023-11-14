import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

const auth = getAuth(app);

const Register = () => {
    const userData = useContext(UserContext);
    const { user, setUser, mood } = userData;

    const [userError, setUserError] = useState('');
    const [success, setSucces] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        setUserError('');
        setSucces(false);

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                updateUsersInfo(name);
                setUser(user);
                setSucces(true);

                sendEmailVerification(auth.currentUser)
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
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                setSucces(true);
            })
            .catch(err => {
                setUserError(err);
            })
    }


    //Common Sign In Method
    const signInMethod = (provider) => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                alert('Successfully Sign In With Google');
            })
            .catch(error => {
                console.error(error);
            })
    }

    //Sign In With Google
    const signInWithGoogle = () => {
        signInMethod(googleProvider);
    }

    //Sign In With Github
    const signInWithGithub = () => {
        signInMethod(gitHubProvider);
    }

    //sign In With Twitter
    const signInWithTwitter = () => {
        signInMethod(twitterProvider);
    }



    return (
        <div className={`w-[96%] md:w-10/12 mx-auto ${mood ? 'text-white' : ''}`}>

            <div>
                {
                    user.uid ? //if Condition
                        <>
                            <h1 className='font-medium text-green-800 mt-5'>Congrats!! Your registration successfull.</h1>

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

                            <hr
                                class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

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