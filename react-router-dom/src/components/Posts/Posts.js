import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className=' w-[95%] mx-auto'>
            <h1 className='text-xl font-medium mb-8'>Posts</h1>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;