import React from 'react'
import { AiFillLinkedin, AiOutlineCalendar } from 'react-icons/ai';
import { FcManager } from 'react-icons/fc';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

function InstructorComponent({ page }) {

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src="https://templatekit.tokomoo.com/musicschool/wp-content/uploads/sites/91/elementor/thumbs/happy-young-man-in-eyeglasses-and-casualwear-sitti-2021-12-16-00-28-51-utc-ptq40arnibjnau61ycblvsppns0n3zczwkayedhjgm.jpg" alt="" className='w-full bg-cover h-80' /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center font-bold text-gray-500">Alfredo Torres</h2>
                <p className='text-center font-bold text-gray-500'> Piano Instructor</p>
                {
                    page && <p className='text-center'>email: arjurana20@gmail.com</p>
                }

                <div className='flex items-center justify-between'>
                    <div className="card-actions justify-end">
                        <div className='flex items-center gap-2'><FcManager size={20} /> <span className='text-md font-bold capitalize text-gray-500'>323 students</span></div>
                    </div>
                    <div className="card-actions justify-start">
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