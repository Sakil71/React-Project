import React, { useState } from 'react';
import { SiYourtraveldottv } from 'react-icons/si';
import { Link, useLoaderData } from 'react-router-dom';

const TravelDetails = () => {
    const detailsData = useLoaderData();
    const { name, images, details, Location } = detailsData;
    const [condition, setCondition] = useState(false);

    const handleCondition = event => {
        if (event.target.checked) {
            setCondition(!condition);
        }
    }


    return (
        <div>
            <div className='md:flex justify-center items-center gap-5 mt-[5%] pb-[10%]'>
                <img className='md:w-[600px] md:h-[500px] rounded mb-4' src={images} alt="" />
                <div>
                    <h1 className='text-4xl md:text-6xl font-bold'>{name}</h1>
                    <p className='text-xl md:text-2xl font-bold opacity-90 text-rose-400 mb-4'>Location: {Location}</p>
                    <p className='opacity-80 mb-10'>{details}</p>

                    <button className='py-2 w-1/2 border rounded bg-rose-900 hover:bg-rose-950' onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                </div>
            </div>


            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_5" className="modal modal-middle w-[96%] mx-auto md:w-full">

                <div className="modal-box text-slate-900">
                    <h3 className="font-bold text-lg flex items-center gap-2 mb-2"><SiYourtraveldottv className='text-rose-600' title='Travellers'></SiYourtraveldottv>{name}</h3>
                    <input className='border border-rose-900 w-full py-1 px-4 mb-2 outline-none rounded-lg font-medium' type="text" placeholder='Your name*' name="" id="" required />

                    <input className='border border-rose-900 w-full py-1 px-4 mb-2 outline-none rounded-lg font-medium' type="number" placeholder='Your phone number*' name="" id="" />

                    <input className='border border-rose-900 w-full py-1 px-4 mb-2 outline-none rounded-lg font-medium' type="number" placeholder='Your NID number*' name="" id="" required />

                    <div className='flex gap-4'>
                        <div className='w-full'>
                            <span>Stay From</span>
                            <input className='border w-full border-rose-900 py-1 px-4 mb-2 outline-none rounded-lg font-medium' type="date" name="" id="" required />
                        </div>
                        <div className='w-full'>
                            <span>To</span>
                            <input className='border w-full border-rose-900 py-1 px-4 mb-2 outline-none rounded-lg font-medium' type="date" name="" id="" required />
                        </div>
                    </div>

                    <form className="flex gap-2">
                        <label onClick={handleCondition} className="cursor-pointer flex items-center gap-2">
                            <input type="checkbox" className="checkbox-primary" />
                            <span className="label-text">Accept</span>
                        </label>
                        <Link to='/terms' className='label-text text-blue-900 underline'>terms & conditioons</Link>
                    </form>


                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className={`px-4 py-1 bg-green-800 hover:bg-green-600 text-white rounded mr-4`} disabled={!condition}>Submit</button>

                            <button className="px-4 py-1 bg-rose-800 hover:bg-red-900 text-white rounded">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>


    );
};

export default TravelDetails;