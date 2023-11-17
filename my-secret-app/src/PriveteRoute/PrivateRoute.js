import React, { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(user && user?.uid){
        return children;
    }
    if(loading){
        return <div className='absolute left-[50%] translate-x-[-50%] top-[50%]'><span className="loading loading-spinner loading-lg"></span></div>
    }
    
    return (
        <Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;