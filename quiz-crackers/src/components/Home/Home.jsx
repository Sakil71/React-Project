import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const {data} = useLoaderData();
    
    return (
        <div className='md:grid grid-cols-4 w-10/12 mx-auto my-10 gap-5'>
            {
                data.map(quizTopic => <Quiz key={quizTopic.id} quizTopic={quizTopic}></Quiz>)
            }
        </div>
    );
};

export default Home;