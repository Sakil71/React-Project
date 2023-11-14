import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quizTopic }) => {
    const { id, logo, name, total } = quizTopic;

    return (
        <div className='shadow-lg rounded p-5 bg-slate-400 text-white duration-1000 hover:bg-red-300 mb-5'>
            <div className='relative'>
                <img src={logo} alt="" />
                <p className='absolute top-[-20px] left-0 text-white font-medium'>Total Quiz: {total}</p>
            </div>
            <div className='flex justify-between mt-4'>
                <h1 className='text-xl font-medium '>{name}</h1>
                <Link to={`/quiz/${id}`} className='bg-blue-700 px-3 py-1 rounded'>Start Quiz</Link>
            </div>
        </div>
    );
};

export default Quiz;