import React, { useContext } from 'react';
import { SiYourtraveldottv } from 'react-icons/si';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';


    const handleFormData = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((result) => {
                navigate(from, { replace: true })
            })
            .catch((err) => { })
    }
    return (
        <div className=''>
            <form onSubmit={handleFormData} className="modal-box text-slate-900 bg-slate-200 w-full md:w-1/2 mx-auto">
                <h3 className="font-bold text-lg flex items-center gap-2 mb-4"><SiYourtraveldottv className='text-rose-600' title='Travellers'></SiYourtraveldottv>Login Now</h3>

                <input className='border border-rose-900 text-rose-400 md:text-slate-950 w-full py-1 px-4 mb-2 outline-none rounded-lg font-medium' type="email" placeholder='Your email*' name="email" id="" required />

                <div className='w-full'>
                    <span>Password</span>
                    <input className='border w-full text-rose-400 md:text-slate-950 border-rose-900 py-1 px-4 mb-2 outline-none rounded-lg font-medium' type="password" placeholder='Your password*' name="password" id="" required />
                </div>

                <div className="w-full">
                    <button className={`px-4 py-1 mt-5 w-full bg-rose-800 hover:bg-rose-600 text-white rounded mr-4`} type='submit'>Login</button>

                    <p className='text-yellow-600 font-medium'><small>New in here? <Link className='text-blue-600 underline' to='/register'>Register</Link></small></p>
                </div>
            </form>
        </div>
    );
};

export default Login;