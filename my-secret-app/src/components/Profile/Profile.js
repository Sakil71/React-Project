import React, { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';

const Profile = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h1>{user?.displayName}</h1>
            <h1>{user?.email}</h1>
        </div>
    );
};

export default Profile;