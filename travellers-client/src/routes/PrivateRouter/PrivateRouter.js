import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (user && user.uid) {
        return children;
    }
    if (loading) {
        return <div className='absolute top-1/2 left-1/2 translate-x-[-50%]'>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRouter;