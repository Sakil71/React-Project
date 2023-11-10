import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;

    const navigate = useNavigate();
    const handleDetails = () =>{
        navigate(`/post/${id}`);
    }

    return (
        <div className='shadow-xl border rounded p-10 text-left'>
            <h1 className='text-xl font-medium'>{title}</h1>
            <small>{body}</small>
            <div className='mt-8 text-center'>
                <button className='bg-blue-800 px-10 py-2 rounded text-white' onClick={handleDetails}>Details About This Post</button>
            </div>
        </div>
    );
};

export default Post;