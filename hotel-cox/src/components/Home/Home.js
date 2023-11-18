import React from 'react';
import './Home.css';
import { FaInfo, FaMoon, FaPlane, FaSave } from 'react-icons/fa';
import Room from '../Room/Room';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <div className='relative nav-cover bg-cover bg-center bg-no-repeat md:h-[450px] text-white rounded h-screen'>
                <div className='font-medium absolute top-[20%] md:top-[30%] left-[50%] translate-x-[-50%] w-full md:w-auto px-5 md:px-0 text-center'>
                    <h1 className='hotel-coxs text-4xl md:text-6xl'>Hotel Cox's Bazar</h1>
                    <p><small>Explore stays in trending destinations & Discover your new favourite stay</small></p>
                    <button className='mt-16'><Link to='/room' className='py-2 bg-transparent border rounded px-5 hover:bg-indigo-950 hover:text-white'>Explore Now</Link></button>
                </div>
            </div>

            <div className=' md:flex justify-between items-center gap-2 bg-transparent rounded-xl p-2 md:px-5 bg-blue-900 my-10'>
                <div className='p-3 flex'>
                    <h1 className='text-2xl'>Find and book your perfect stay</h1>
                    <Link title='terms & conditions'><FaInfo className='text-xs border rounded-full bg-transparent'></FaInfo></Link>
                </div>

                <div className='flex gap-4 overflow-x-auto scroll-smooth no-scrollbar'>

                    <div className=' px-28 h-32 relative gap-4 bg-indigo-950  rounded-xl'>
                        <div className='flex gap-3 items-center absolute left-2 px-2 top-[50%] translate-y-[-50%]'>
                            <FaMoon className='text-5xl'></FaMoon>
                            <p>Earn rewards on every night you stay</p>
                        </div>
                    </div>

                    <div className=' px-28 h-32 relative gap-4 bg-indigo-950 p-5 rounded-xl'>
                        <div className='flex gap-3 items-center absolute left-2 px-2 top-[50%] translate-y-[-50%]'>
                            <FaSave className='text-5xl'></FaSave>
                            <p>Save more with Member Prices</p>
                        </div>
                    </div>

                    <div className=' px-28 h-32 relative gap-4 bg-indigo-950 p-5 rounded-xl'>
                        <div className='flex gap-3 items-center absolute left-2 px-2 top-[50%] translate-y-[-50%]'>
                            <FaPlane className='text-5xl'></FaPlane>
                            <p>Free cancellation options if plans change</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='my-20'>
                <Room></Room>
            </div>

        </div>
    );
};

export default Home;