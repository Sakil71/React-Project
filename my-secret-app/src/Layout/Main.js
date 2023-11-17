import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='px-4 break-all'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;