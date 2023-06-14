import React, { useContext, useEffect, useRef, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { GiPayMoney } from 'react-icons/gi';

import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import Tittle from '../../components/metaTitle/Title';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

function SelectedClass() {
  const token = localStorage.getItem('access-token');
  const { user } = useContext(AuthContext);

  const { data: classes = [], refetch } = useQuery(['selectedClass'], async () => {
    const res = await fetch(`https://e-school-mu.vercel.app/selectedClasses/${user?.email}`, {
      headers: {
        authorization: `bearer ${token}`,
        'content-type': 'application/json',

      }
    })
    return res.json();
  })
  const handleDelete = (id) => {
    fetch(`https://e-school-mu.vercel.app/selectedClass/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount == 1) {
          refetch();
          Swal.fire({
            icon: 'success',
            text: 'Unselected successful',
          })

        };
      })
  }



  return (
    <div>
      <Tittle heading={"My selected Classes"} />
      <div className=''>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>

                <th>Class Name</th>
                <th>Instructor</th>
                <th>Price</th>
                <th>Delete</th>
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
                    <button className={`btn  btn-xs text-white bg-red-500 rounded-full`} onClick={() => handleDelete(course._id)}><AiOutlineDelete size={22} /> </button>

                  </td>
                  <td>
                    <Link to={`/dashboard/payment/${course._id}`}>
                      <button className={`btn btn-sm text-white bg-red-500 rounded-full`} ><GiPayMoney size={20} />  Pay Now</button>
                    </Link>

                  </td>

                </tr>)
                  : <h2 className='text-3xl mt-10 block text-center'>No Selected Item here</h2>
              }

            </tbody>


          </table>
        </div>
      </div>

    </div>
  )
}

export default SelectedClass