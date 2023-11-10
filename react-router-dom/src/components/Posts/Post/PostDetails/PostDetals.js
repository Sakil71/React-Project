import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PostDetals = () => {
    const post = useLoaderData();
    const { title, body, userId } = post;
    console.log(post)
    return (
        <div className='text-left w-10/12 mx-auto'>
            <h1 className='text-xl font-medium'>{title}</h1>
            <small>{body}</small>
            <div className='mt-10'>
                <Link to={`/user/${userId}`} className='bg-blue-800 px-10 py-2 rounded text-white'>See Author</Link>
            </div>
        </div>
    );
};

export default PostDetals;