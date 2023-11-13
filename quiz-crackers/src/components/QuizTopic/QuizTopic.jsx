import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizTopic = () => {
    const quizTopic = useLoaderData();
    const {data} = quizTopic;
    // console.log(data)

    return (
        <div>
            <h1 className='text-2xl font-medium my-5'>Quiz of {data.name}</h1>
            {
                data.questions.map(singleQuestion => <Questions key={singleQuestion.id} singleQuestion={singleQuestion}></Questions>)
            }
        </div>
    );
};

export default QuizTopic;