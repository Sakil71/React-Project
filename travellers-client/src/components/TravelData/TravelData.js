import React from 'react';
import { Link } from 'react-router-dom';
import './TravelData.css'

const TravelData = ({ data }) => {
    const { id, images, name } = data;
    console.log(data);

    return (
        <div className=' h-[380px] w-60 rounded-xl'>
            <Link to={`/travellers/${id}`}>

                <div className='relative overflow-hidden rounded-xl'>
                    <img className='back-cover h-[380px] rounded-xl w-full' src={images} alt="" />

                    <div className='data-details absolute h-full w-full top-0 left-0 bg-transparent transition duration-1000 ease-in'>

                        <h1 className='absolute text-2xl md:text-3xl text-white md:text-rose-400 font-bold w-full top-[45%] md:top-auto md:bottom-0 left-[60%] translate-x-[-50%] hover:transition duration-1000 ease-in opacity-100 md:opacity-0'>{name}</h1>
                    </div>
                </div>

            </Link>
        </div>
    );
};

export default TravelData;