import React, { useContext, useEffect, useRef, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { GiPayMoney } from 'react-icons/gi';

import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import Tittle from '../../components/metaTitle/Title';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

function EnrolledClass() {
  const token = localStorage.getItem('access-token');
  const { user } = useContext(AuthContext);

  const { data: classes = [], refetch } = useQuery(['selectedClass'], async () => {
    const res = await fetch(`https://e-school-mu.vercel.app/enrolledClasses/${user?.email}`, {
      headers: {
        authorization: `bearer ${token}`,
        'content-type': 'application/json',

      }
    })
    return res.json();
  })
 



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
                <th>Payment</th>
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
                    <Link to={`/dashboard/payment/${course._id}`}>
                      <button className={`btn btn-sm text-white bg-red-500 rounded-full`} >{course?.paymentStatus}</button>
                    </Link>

                  </td>
              

                </tr>)
                  : <h2 className='text-3xl mt-10 block text-center'>No enrolled Item here</h2>
              }

            </tbody>


          </table>
        </div>
      </div>

    </div>
  )
}

export default EnrolledClass