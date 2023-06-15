import React from 'react'
import { AiFillLinkedin, AiOutlineCalendar } from 'react-icons/ai';
import { FcManager } from 'react-icons/fc';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

function InstructorComponent({ page, instructor }) {

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={instructor?.photoURL} alt="" className='w-full bg-cover h-80' /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center font-bold text-gray-500">{instructor?.name}</h2>
                {
                    page && <p className='text-center'>email: {instructor?.email}</p>
                }

                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'><FcManager size={20} /> <span className='text-md font-bold capitalize text-gray-500'>{instructor?.students} students</span></div>
                    <div className="card-actions justify-center">
                        <div className='flex items-center gap-2'>
                            <BsFacebook size={20} color='#FF7703' />
                            <AiFillLinkedin size={20} color='#FF7703' />
                            <BsInstagram size={20} color='#FF7703' />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default InstructorComponent