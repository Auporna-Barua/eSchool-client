import React, { useContext } from 'react'
import { AiOutlineCalendar, AiOutlineHeart } from 'react-icons/ai'
import { FcManager } from 'react-icons/fc'
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

function Class({ course }) {
    const { user } = useContext(AuthContext);
    const isAdmin = useAdmin();
    console.log("isAdmin 23", isAdmin[1]);
    const token = localStorage.getItem('access-token');
    const handleSelect = (course) => {
        fetch(`https://e-school-mu.vercel.app/selectedClass/${user.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${token}`

            },
            body: JSON.stringify(course)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Selected Class successful',
                    })

                };
            })
    }
    return (
        <div className={`card card-compact  bg-base-100  shadow-xl ${course?.seats < 1 && "bg-red-600"}`}>
            <figure><img src={course.photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className={`card-title ${course?.seats < 1 && "text-white"}`}>{course.name}</h2>

                <div className="card-actions justify-between">
                    <div className='flex items-center gap-2'><FcManager size={20} /> <span className={`text-md font-bold capitalize text-gray-500 ${course?.seats < 1 && "text-white"}`}>{course.instructor}</span></div>
                    <div className={`flex items-center gap-2 ${course?.seats < 1 && "text-white" }`}><AiOutlineHeart size={20} color={"#FF7703"} /> <span className='text-md font-bold capitalize text-gray-500'>{course.enroll ? course.enroll : "0"} Student</span></div>
                </div>
                <div className="card-actions">
                    <div className='flex items-center gap-2'>
                        <p className={`text-md font-bold capitalize text-gray-500 ${course?.seats < 1 && "text-white"}`}>Available seats: {course.seats}</p>
                    </div>

                </div>
                <div className="card-actions">

                    <p className={`text-md font-bold capitalize text-gray-500 ${course?.seats < 1 && "text-white"}`}>Price: {course.price}৳</p>


                </div>
                <div className="card-actions">
                    {
                        user && user.email ? <button className={`btn bg-[#FF7703] text-white w-full hover:bg-[#FF7703] ${(course.seats < 1 || isAdmin[1] == "musician" || isAdmin[1] == "admin") && "cursor-not-allowed pointer-events-none	 opacity-30"}`} onClick={() => handleSelect(course)}>Select Course</button> : <Link to="/logIn" className={`btn bg-[#FF7703] text-white w-full hover:bg-[#FF7703]`} >Login for select course</Link>
                    }


                </div>
            </div>
        </div>
    )
}

export default Class