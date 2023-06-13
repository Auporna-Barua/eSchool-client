import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrash, FaUser, FaUserGraduate, FaUserShield, FaUserSlash, FaChalkboardTeacher } from 'react-icons/fa';
import Tittle from '../../components/metaTitle/Title';
import Swal from 'sweetalert2';


const AllUsers = () => {
    const token = localStorage.getItem('access-token');

    const { data: users = [], refetch } = useQuery(['allUsers'], async () => {
        const res = await fetch('http://localhost:5000/allUsers', {
            headers: {
                authorization: `bearer ${token}`
            }
        })
        return res.json();
    })

    // Make Admin functionality
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/allUsers/admin/${id}`, {
            method: 'PATCH',
            headers: {
                authorization: `bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Make Admin Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    //Make instructor functionality 
    const handleMakeMusician = id => {
        fetch(`http://localhost:5000/allUsers/musician/${id}`, {
            method: 'PATCH',
            headers: {
                authorization: `bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Make Musician Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    // deleted user functionality
    const handleDeleteUser = (id) => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${token}`,
                'Content-Type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount == 1) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'One User Successfully Delete!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <>
            <Tittle heading={'Manage User'}></Tittle>
            <div className="overflow-x-auto w-full px-2">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-lg font-bold text-black'>#</th>
                            <th className='text-lg font-bold text-black'>Name</th>
                            <th className='text-lg font-bold text-black'>email</th>
                            <th className='text-lg font-bold text-black'>Admin</th>
                            <th className='text-lg font-bold text-black'>Instructor </th>
                            <th className='text-lg font-bold text-black'>Student</th>
                            <th className='text-lg font-bold text-black'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} className="bg-base-200">
                                <th className=''>{index + 1}</th>
                                <td className='font-semibold text-base text-black'>{user.name}</td>
                                <td className='font-semibold text-base text-black'>{user.email}</td>

                                <td>{user.role === 'admin' ? <span className='font-bold text-base bg-[#FF7703] p-2 text-white rounded-lg'>Admin</span> : <button onClick={() => handleMakeAdmin(user._id)} className='p-2 hover:bg-[#FF7703] hover:text-white hover:rounded-full duration-500 w-fit'><FaUserShield className='w-5 h-5 '></FaUserShield></button>}</td>


                                <td>{user.role === 'musician' ? <span className='font-bold text-base bg-[#FF7703] p-2 text-white rounded-lg'>Instructor</span> : <button onClick={() => handleMakeMusician(user._id)} className='p-2 hover:bg-[#FF7703] hover:text-white hover:rounded-full duration-500 w-fit'><FaChalkboardTeacher className='w-5 h-5 '></FaChalkboardTeacher></button>}</td>

                                <td>{user.role === 'student' ? <span className='font-bold text-base bg-teal-500 p-2 text-yellow-200 rounded-lg'>Student</span> : <button className='p-2 bg-[#FF7703] text-white rounded-full duration-500 w-fit'><FaUser className='w-4 h-4 '></FaUser></button>}</td>

                                <td><button onClick={() => handleDeleteUser(user._id)} className='p-2 hover:bg-[#FF7703] hover:text-white hover:rounded-full duration-500 w-fit'><FaTrash className='w-4 h-4 '></FaTrash></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllUsers;