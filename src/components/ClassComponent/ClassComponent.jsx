import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai';
import { FcManager } from 'react-icons/fc';

function ClassComponent() {


    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src="http://notacorda.like-themes.com/wp-content/uploads/2017/10/Class_1-770x440.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Guitar classes</h2>
                <p> Nunc rhoncus libero vitae urna commodo faucibus. Mauris at feugiat est, sit amet.?</p>
                <div className="card-actions justify-end">
                    <div className='flex items-center gap-2'><AiOutlineCalendar size={20} /> <span className='text-md font-bold capitalize text-gray-500'>3 months</span></div> 
                    <div className='flex items-center gap-2'><FcManager size={20} /> <span className='text-md font-bold capitalize text-gray-500'>323 students</span></div>


                </div>
            </div>
        </div>
    )
}

export default ClassComponent