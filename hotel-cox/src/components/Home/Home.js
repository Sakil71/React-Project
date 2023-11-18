import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='relative nav-cover bg-cover bg-center bg-no-repeat h-[450px] text-white'>
            <div className='font-medium absolute top-[30%] left-[50%] translate-x-[-50%]'>
                <h1 className='hotel-coxs text-4xl md:text-6xl'>Hotel Cox's Bazar</h1>
                <p><small>Explore stays in trending destinations & Discover your new favourite stay</small></p>
            </div>
        </div>
    );
};

export default Home;