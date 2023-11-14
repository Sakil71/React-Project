import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex gap-4'>
                <div className='bg-slate-900 text-white w-1/4 min-h-screen p-5 text-left hidden md:block'>
                    <LeftSideBar></LeftSideBar>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;