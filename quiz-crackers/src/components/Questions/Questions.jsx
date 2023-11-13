import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'

const Questions = ({ singleQuestion }) => {
    const [isCorrect, setIsCorrect] = useState('');
    const { question, options , correctAnswer} = singleQuestion;
    console.log(singleQuestion)

    const rightAnswer = (option) =>{
        if(option === correctAnswer){
            setIsCorrect(option);
        }
    }

    return (
        <div className='relative mb-6 shadow-xl border rounded p-4 w-1/2 mx-auto text-left'>
            <h1 className='text-xl mb-4 font-medium opacity-80 text-red-600'>{question.slice(3, -4)}</h1>
            <div className='grid grid-cols-2 gap-4'>
                {
                    options.map(option => <div
                        onClick={()=>rightAnswer(option)}
                        className={`flex gap-2 p-4 border border-blue-400 rounded hover:bg-blue-300 hover:text-white cursor-pointer hover:font-medium ${isCorrect === option ? 'bg-green-600' : ''}`}>
                        <input type="radio" name="" id="options" />
                        <p>{option}</p>
                    </div>
                    )
                }
            </div>
            <button className='absolute top-2 right-2 text-blue-600' title='See Right Answer'>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Questions;