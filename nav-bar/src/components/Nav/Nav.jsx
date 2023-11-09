import React, { useState } from 'react';
import { XMarkIcon, Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import List from '../List/List';

const Nav = ({mood, setMood}) => {
    const [open, setOpen] = useState(false);

    const routes = [
        {id: 1, name: 'Home', path: '/home'},
        {id: 2, name: 'About', path: '/about'},
        {id: 3, name: 'My CV', path: '/nycv'},
        {id: 4, name: 'Contacts', path: '/contacts'},
        {id: 5, name: 'Blog', path: '/blog'},
    ]
    return (
        <div>
            <div className='px-10 py-4 text-white bg-green-800 flex justify-between items-center relative'>
            <h1 className='text-2xl font-bold'>Nav</h1>

            <div onClick={()=> setOpen(!open)} className='h-8 w-8 text-white md:hidden'>
                {
                    open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                }
            </div>

            <ul className={`md:flex gap-5 absolute md:static min-h-[90vh] md:min-h-0 text-left md:text-right pt-5 px-10 md:px-0 md:pt-0 duration-700 bg-green-800 ease-in ${open ? 'left-0 top-16' : 'left-[-250px] top-16'}`}>
                {
                    routes.map(route => <List key={route.id} route={route}></List>)
                }
                <div onClick={()=> setMood(!mood)} className='h-7 w-7 cursor-pointer mt-4 md:mt-0 ml-3 md:ml-0'>
                {
                    mood ?<SunIcon title='Day Mood' className='text-yellow-400'></SunIcon> : <MoonIcon title='Night Mood' className='text-slate-800'></MoonIcon>
                }
                </div>
            </ul>
        </div>
        <h1 className='text-4xl font-bold mt-32'>Welcome to my new react app!!!</h1>
        </div>
    );
};

export default Nav;