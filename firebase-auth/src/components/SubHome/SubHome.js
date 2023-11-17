import { faComment, faPaperPlane, faShareSquare, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faEarth, faEllipsis, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const SubHome = ({ album }) => {
    const { url, title, description, id, user } = album;
    
    const [like, setLike] = useState(false);
    const [commentBox, setCommentBox] = useState(false);
    const [comment, setComment] = useState('');
    const [share, setShare] = useState(false);

    const handleLikeButton = () => {
        return setLike(!like);
    }

    const handleCommentBox = (event) => {
        event.preventDefault();
        const form = event.target;
        const comments = form.comment.value;
        form.reset();
        setCommentBox(false);
        setComment(comments)
    }

    const handleShareButton = () => {
        if (!share) {
            toast.success("Successfully Shared");
        }
        else {
            toast.error("Removed Your Share");
        }
        setShare(!share);
    }

    return (
        <div className='mb-16 bg-slate-100'>
            <div className='relative flex flex-col-reverse md:flex-row md:items-center p-4 gap-4 md:gap-10 shadow-xl border rounded'>
                <img className='md:w-1/2 duration-1000 rounded' src={url} alt="" />
                <div>
                    <div className='flex gap-4 text-blue-950 opacity-80 items-center'>
                        <img className='w-10 h-10 rounded-full' src={url} alt="" />
                        <div className='flex w-full gap-4 justify-between items-baseline'>
                            <div>
                                <h1 className='font-bold text-base p-0 m-0'>{title}</h1>
                                <p className='text-xs font-medium'><small>{id}/{user}</small> <button><FontAwesomeIcon className='ml-2' icon={faEarth}></FontAwesomeIcon></button></p>
                            </div>
                            <div>
                                <button className='text-xl'><FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon></button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 opacity-80'>
                        <p>{description} <button className='text-blue-500'>... see more</button></p>
                    </div>
                </div>

                <form onSubmit={handleCommentBox} className={` absolute rounded duration-1000 w-[90%] left-[50%] translate-x-[-50%] bottom-2 ${commentBox === true ? 'opacity-100' : 'opacity-0 bottom-[-20px]'}`} >
                    <textarea className='w-full p-4 font-bold rounded border shadow-xl border-red-800' placeholder='Input Your Comment' name="comment" id="" rows="1"></textarea>
                    <button className='absolute bottom-4 right-4 px-4 py-1 bg-blue-950 text-white rounded' type='submit'><FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon></button>
                </form>


            </div>

            <div className='mt-4 flex justify-between px-[4%]'>
                <button className='text-xl font-bold'><small>{like ? 1 : 0}</small></button>
                <button className='text-xl font-bold'><small>{comment.length}</small></button>
                <button className='text-xl font-bold'><small>{share ? 1 : 0}</small></button>
            </div>

            <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <div className='flex justify-around pb-4'>
                {
                    like ?
                        <button onClick={handleLikeButton} className={`text-lg flex items-center gap-2 font-medium bg-blue-800 rounded px-4 text-white`}><FontAwesomeIcon icon={faThumbtack}></FontAwesomeIcon><small>Liked</small></button>
                        :
                        <button onClick={handleLikeButton} className={`text-lg flex items-center gap-2 font-medium bg-blue-600 rounded px-4 text-white`}><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon><small>Like</small></button>
                }
                <button onClick={() => setCommentBox(!commentBox)} className='text-lg flex items-center gap-2 font-medium bg-blue-600 rounded px-4 text-white' title='Click here for comment'><FontAwesomeIcon icon={faComment}></FontAwesomeIcon><small>Comment</small></button>


                <button onClick={handleShareButton} className='text-lg flex items-center gap-2 font-medium bg-blue-600 rounded px-4 text-white'><FontAwesomeIcon icon={faShareSquare}></FontAwesomeIcon><small>Share</small></button>
            </div>
            {
                comment &&
                <div className='px-10 pb-4 my-4 font-bold'>
                    <h1 className='mb-2'>Comments:</h1>
                    <div className='flex gap-2 items-center'>
                        <button><img className='w-10 h-10 rounded-full' src={url} alt="" /></button>
                        <small className='bg-slate-300 pl-5 pr-10 py-2 rounded-full text-left'>{comment}</small>
                    </div>
                </div>
            }

            <ToastContainer />

        </div>
    );
};

export default SubHome;