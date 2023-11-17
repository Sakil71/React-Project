import React, { useContext, useState } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const { logIn, googleSignIn } = useContext(AuthContext);
    const [userError, setUserError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                form.reset();
                toast("Congrats!! Registration successfull.")
                navigate(from, {replace: true});
            })
            .catch(error => {
                setUserError(error.message);
            })
    }

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                toast("Congrats!! Registration successfull.")
                navigate(from, {replace: true});
                console.log(result.user)
            })
            .catch(error => {
                setUserError(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p className='text-red-400 font-medium'>{userError.slice(10)}</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-8">
                        <form onSubmit={handleLogIn} className="card-body pb-0">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign In</button>
                            </div>

                            <label className="label">
                                <span className="label-text">New in here? <Link className='btn btn-link' to='/register'>Register</Link></span>
                            </label>
                        </form>

                        <div className="divider">OR</div>

                        <div className=' flex gap-8 justify-center mt-4'>
                            <button onClick={handleGoogle} className='w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></button>

                            <button className='w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></button>

                            <button className='w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;