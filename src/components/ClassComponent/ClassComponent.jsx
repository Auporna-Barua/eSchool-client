import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai';
import { FcManager } from 'react-icons/fc';

function ClassComponent({ course }) {


    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={course.photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{course.name}</h2>

                <div className="card-actions justify-between">
                  
                    <div className='flex items-center gap-2'><span className='text-md font-bold capitalize text-gray-500'>Avaiable seats: {course?.seats}</span></div>
                    <div className='flex items-center gap-2'><FcManager size={20} /> <span className='text-md font-bold capitalize text-gray-500'>{course?.enroll ? course.enroll : "0"} students</span></div>
                </div>
                <div className='flex items-center gap-2'><span className='text-md font-bold capitalize text-gray-500'>Price: {course?.price}৳
                </span></div>
            </div>
        </div>
    )
}

export default ClassComponent