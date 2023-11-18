import React from 'react';
import { FaBed, FaPeopleArrows } from 'react-icons/fa';

const img1 = "https://i.ibb.co/Sc0JSGM/pexels-ahmet-t-r-19075394.jpg";
const img2 = "https://i.ibb.co/VVcmKGg/pexels-max-rahubovskiy-6782567.jpg";
const img3 = "https://i.ibb.co/N7DtXp6/pexels-luca-luperto-19045888.jpg";

const Room = () => {
    
    return (
        <div className='flex flex-col md:flex-row justify-between gap-4'>
            <div className='shadow-md p-1 rounded shadow-gray-700 bg-transparent'>
                <div className="flex items-center gap-4 font-medium mb-4">
                    <span className='w-10 h-10 bg-indigo-900 text-white rounded-full flex justify-center items-center'>S</span>
                    <h1 className='text-2xl opacity-80'>Standard Single Room</h1>
                </div>
                <img className='h-80 w-full rounded' src={img1} alt="" />
                <p className='opacity-80 mt-2 mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error aut eius illum a dolorum, pariatur distinctio dicta odit molestias commodi.</p>
                <div className='flex justify-between items-center text-xl font-medium px-1 my-2'>
                    <p className='flex items-center gap-2' title='Bed capacity'><FaBed></FaBed> <span>: 1</span></p>
                    <p className='flex items-center gap-2' title='People capacity'><FaPeopleArrows></FaPeopleArrows><span>: 1</span></p>
                    <p>$119</p>
                    <button className='text-xs bg-indigo-700 px-3 py-2 rounded hover:bg-indigo-900 '>Book Now</button>
                </div>
            </div>

            <div className='shadow-md p-1 rounded shadow-gray-700 bg-transparent'>
                <div className="flex items-center gap-4 font-medium mb-4">
                    <span className='w-10 h-10 bg-indigo-900 text-white rounded-full flex justify-center items-center'>D</span>
                    <h1 className='text-2xl opacity-80'>Couple Power Room</h1>
                </div>
                <img className='h-80 w-full rounded' src={img2} alt="" />
                <p className='opacity-80 mt-2 mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error aut eius illum a dolorum, pariatur distinctio dicta odit molestias commodi.</p>
                <div className='flex justify-between items-center text-xl font-medium px-1 my-2'>
                    <p className='flex items-center gap-2' title='Bed capacity'><FaBed></FaBed> <span>: 1</span></p>
                    <p className='flex items-center gap-2' title='People capacity'><FaPeopleArrows></FaPeopleArrows><span>: 2</span></p>
                    <p>$149</p>
                    <button className='text-xs bg-indigo-700 px-3 py-2 rounded hover:bg-indigo-900 '>Book Now</button>
                </div>
            </div>

            <div className='shadow-md p-1 rounded shadow-gray-700 bg-transparent'>
                <div className="flex items-center gap-4 font-medium mb-4">
                    <span className='w-10 h-10 bg-indigo-900 text-white rounded-full flex justify-center items-center'>F</span>
                    <h1 className='text-2xl opacity-80'>Family Capacity Room</h1>
                </div>
                <img className='h-80 w-full rounded' src={img3} alt="" />
                <p className='opacity-80 mt-2 mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error aut eius illum a dolorum, pariatur distinctio dicta odit molestias commodi.</p>
                <div className='flex justify-between items-center text-xl font-medium px-1 my-2'>
                    <p className='flex items-center gap-2' title='Bed capacity'><FaBed></FaBed> <span>: 2</span></p>
                    <p className='flex items-center gap-2' title='People capacity'><FaPeopleArrows></FaPeopleArrows><span>: 4</span></p>
                    <p>$199</p>
                    <button className='text-xs bg-indigo-700 px-3 py-2 rounded hover:bg-indigo-900 '>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Room;