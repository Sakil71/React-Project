import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(user && user?.uid){
        return children;
    }
    if(loading){
        return <p>Lodaing....</p>
    }
    return <Navigate to='/signIn' state={{from : location}} replace></Navigate>
    
};

export default PrivateRoute;