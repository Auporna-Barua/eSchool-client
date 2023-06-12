import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { FcManager } from 'react-icons/fc'

function Class() {
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src="http://notacorda.like-themes.com/wp-content/uploads/2017/10/Class_1-770x440.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Guitar classes</h2>

                <div className="card-actions">
                    <div className='flex items-center gap-2'><FcManager size={20} /> <span className='text-md font-bold capitalize text-gray-500'>Rana Arju</span></div>
                    <div className='flex items-center gap-2'><AiOutlineCalendar size={20} /> <span className='text-md font-bold capitalize text-gray-500'>3 months</span></div>
                </div>
                <div className="card-actions">
                    <div className='flex items-center gap-2'>
                        <p className='text-md font-bold capitalize text-gray-500'>Available seats: 653</p>
                    </div>

                </div>
                <div className="card-actions">

                    <p className='text-md font-bold capitalize text-gray-500'>Price: 6530 ৳</p>


                </div>
                <div className="card-actions">
                    <button className="btn bg-[#FF7703] text-white w-full hover:bg-[#FF7703]">Select Course</button>

                </div>
            </div>
        </div>
    )
}

export default Class