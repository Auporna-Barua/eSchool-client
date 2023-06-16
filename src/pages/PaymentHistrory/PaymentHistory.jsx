import React, { useContext, useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2';
import Tittle from '../../components/metaTitle/Title';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Provider/AuthProvider';
import moment from 'moment';

function PaymentHistory() {
    const token = localStorage.getItem('access-token');
    const { user } = useContext(AuthContext);

    const { data: classes = [], refetch } = useQuery(['paymenthistory'], async () => {
        const res = await fetch(`http://localhost:5000/paymenthistory/${user?.email}`, {
            headers: {
                authorization: `bearer ${token}`,
                'content-type': 'application/json',
            }
        })
        return res.json();
    })
    console.log("classes", classes);
    return (
        <div>
            <Tittle heading={"My Enrolled Classes"} />
            <div className=''>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Class Name</th>
                                <th>Instructor</th>
                                <th>Price</th>
                                <th>Transaction Id</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                classes.length > 0 ? classes.map(course => <tr key={course._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={course?.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{course.name.length > 25 ? course.name.substring(0, 25) + "..." : course.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {course.instructor}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{course.email}</span>
                                    </td>

                                    <td className='text-md font-bold'>{course?.price}৳</td>

                                    <td>
                                        <button>
                                            <button className={`btn btn-sm text-white bg-red-500 rounded-full`} >{course?.transactionId}</button>
                                        </button>

                                    </td>
                                    <td>
                                            <button className={`btn btn-sm text-white bg-red-500 rounded-full`} >
                                            {moment(course.date).format("YYYY-MM-DD, h:mm:ss a")}
                                            </button>

                                    </td>


                                </tr>)
                                    : <h2 className='text-3xl mt-10 block text-center'>No payment history avaiable</h2>
                            }

                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    )
}

export default PaymentHistory