import React, { useContext, useState } from 'react';
import { SiYourtraveldottv } from 'react-icons/si';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);

    const [condition, setCondition] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleFormData = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoUrl.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password !== confirmPassword) {
            setError("Password dosen't match.")
            return;
        }

        createUser(email, password)
            .then(result => {
                setError('');
                navigate(from, { replace: true });
                updateUser({
                    displayName: name,
                    photoURL: photo
                })
            })
            .catch(err => {
                setError(err.message);
            })
    }

    const handleCondition = (event) => {
        if (event.target.checked) {
            setCondition(true);
        }
        else {
            setCondition(false);
        }
    }

    return (
        <div className=''>
            <form onSubmit={handleFormData} className="modal-box text-slate-900 bg-slate-200 w-full md:w-1/2 mx-auto">
                <h3 className="font-bold text-lg flex items-center gap-2 mb-4"><SiYourtraveldottv className='text-rose-600' title='Travellers'></SiYourtraveldottv>Create account</h3>

                <input className='border border-rose-900 text-rose-400 md:text-slate-950 w-full py-1 px-4 mb-2 outline-none rounded-lg font-medium' type="text" placeholder='Your name' name="name" id="" required />

                <input className='border border-rose-900 text-rose-400 md:text-slate-950 w-full py-1 px-4 mb-2 outline-none rounded-lg font-medium' type="url" placeholder='Your photo url' name="photoUrl" id="" />

                <input className='border border-rose-900 text-rose-400 md:text-slate-950 w-full py-1 px-4 mb-2 outline-none rounded-lg font-medium' type="email" placeholder='Your email*' name="email" id="" required />

                <div className='flex flex-col md:flex-row gap-4 text-slate-900'>
                    <div className='w-full'>
                        <p>Password <span className='text-red-800'>*</span></p>
                        <input className='border w-full border-rose-900 py-1 px-4 mb-2 outline-none rounded-lg font-medium text-rose-400 md:text-slate-950' type="password" placeholder='Password' name="password" id="" required />
                    </div>
                    <div className='w-full'>
                        <p>Confirm Password <span className='text-red-800'>*</span></p>
                        <input className='border w-full border-rose-900 py-1 px-4 mb-2 outline-none rounded-lg font-medium text-rose-400 md:text-slate-950' type="password" placeholder='Confirm Password' name="confirmPassword" id="" required />
                    </div>
                </div>

                <div className="flex gap-2">
                    <label onClick={handleCondition} className="cursor-pointer flex items-center gap-2">
                        <input type="checkbox" className="checkbox-primary" />
                        <span className="label-text">Accept</span>
                    </label>
                    <Link to='/terms' className='label-text text-blue-900 underline'>terms & conditioons</Link>
                </div>

                <p className='text-red-600 mt-4'>{error}</p>


                <div className="w-full">
                    <button className={`px-4 py-1 mt-5 w-full bg-rose-800 hover:bg-rose-600 text-white rounded mr-4`} disabled={!condition} type='submit'>Register</button>

                    <p className='text-yellow-600 font-medium'><small>Already have an account? <Link className='text-blue-600 underline' to='/login'>Login</Link></small></p>
                </div>
            </form >
        </div >
    );
};

export default Register;