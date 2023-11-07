import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>Countries Info</h2>
            <div>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Countries Blog</a>
                <a href="">Countries Tourism</a>
                <a href="">Passport</a>
            </div>
        </div>
    );
};

export default Header;