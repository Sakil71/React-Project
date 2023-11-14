import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizTopic = () => {
    const [isCorrect, setIsCorrect] = useState([]);


    const quizTopic = useLoaderData();
    const { data } = quizTopic;

    return (
        <div>
            <h1 className='text-2xl font-medium my-5'>Quiz of {data.name}</h1>
            <div className='md:flex gap-5 w-11/12 mx-auto'>
                <div className='w-3/4'>
                    {
                        data.questions.map(singleQuestion => <Questions
                            key={singleQuestion.id}
                            singleQuestion={singleQuestion}
                            isCorrect={isCorrect}
                            setIsCorrect={setIsCorrect}
                        ></Questions>)
                    }
                </div>
                <div className='w-1/4'>
                    <h1 className='text-xl font-medium text-blue-800 opacity-80'>Correct Answers: {isCorrect}</h1>
                </div>
            </div>
        </div>
    );
};

export default QuizTopic;