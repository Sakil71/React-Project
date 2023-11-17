import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';
import { AuthContext } from '../contexts/UserContext';
import Header from '../components/Header/Header.js';

const Main = () => {
    const { mood } = useContext(AuthContext);

    return (
        <div>
            <Header></Header>
            <div className={`relative flex gap-4 ${mood ? 'bg-slate-800 text-white min-h-screen' : ''}`}>
                <div className='bg-slate-900 text-white w-1/4 min-h-screen p-5 text-left hidden md:block'>
                    <LeftSideBar></LeftSideBar>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;