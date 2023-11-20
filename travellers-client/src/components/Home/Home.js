import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import TravelData from '../TravelData/TravelData';

const Home = () => {
    const travelsData = useLoaderData();

    return (
        <div className='md:flex justify-between items-center gap-4 mt-[5%] pb-10'>
            <div className='md:w-3/4 mb-10 md:mb-0'>
                <h1 className='text-4xl md:text-6xl font-bold'>Cox's Bazar</h1>
                <p className='opacity-80'>Cox's Bazar is a city, fishing port, tourism centre and district headquaters in southeastern Bangladesh. It is famous for its long natural sandy beach, and it ...</p>

                <button className='py-2 px-10 border rounded-lg hover:bg-rose-800 mt-10 flex items-center gap-4'>Explore Now <FaLongArrowAltRight></FaLongArrowAltRight></button>
            </div>

            <div className='flex w-full overflow-x-auto no-scrollbar'>
                <div className='flex gap-5'>
                    {
                        travelsData.map(data => <TravelData key={data.id} data={data}></TravelData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;