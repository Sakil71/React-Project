import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';



const Register = () => {
    const { createUser, googleSignIn, facebookLogin, updateUser } = useContext(AuthContext);
    const [userError, setUserError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateUser(name)
                    .then(result => {
                        console.log(result.user);
                    })
                    .catch(err => {
                        setUserError(err);
                    })

                form.reset();
                toast("Congrats!! Registration successfull.")
                navigate(from, { replace: true });
            })
            .catch(error => {
                setUserError(error.message);
            })
    }

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                toast("Congrats!! Registration successfull.")
                navigate(from, { replace: true });
            })
            .catch(error => {
                setUserError(error.message);
            })
    }

    const handleFacebook = () => {
        facebookLogin()
            .then(result => {
                toast("Congrats!! Registration successfull.")
                navigate(from, { replace: true });
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
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p className='text-red-400 font-medium'>{userError.slice(10)}</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-8">
                        <form onSubmit={handleRegister} className="card-body pb-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>

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
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>
                            <label className="label">
                                <span className="label-text">Already have an account? <Link className='btn btn-link' to='/login'>Log In</Link></span>
                            </label>
                        </form>

                        <div className="divider">OR</div>

                        <div className=' flex gap-8 justify-center mt-4'>
                            <button onClick={handleGoogle} className='w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></button>

                            <button className='w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></button>

                            <button onClick={handleFacebook} className='w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;