import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Opppps!!!!!!</h1>
            <p>Page not found</p>
            <Link to='/home'>Home</Link>
        </div>
    );
};

export default ErrorPage;