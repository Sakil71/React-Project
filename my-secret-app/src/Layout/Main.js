import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-[95%] mx-auto px-4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;