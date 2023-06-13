import { useQuery } from '@tanstack/react-query';
import React, { useContext, useRef, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { GiPayMoney } from 'react-icons/gi';

import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import Tittle from '../../components/metaTitle/Title';

function SelectedClass() {
  const token = localStorage.getItem('access-token');
  const [id, setId] = useState("")
  const { user } = useContext(AuthContext);
  const { data: classes = [], refetch } = useQuery(['classes'], async () => {
    const res = await fetch(`http://localhost:5000/myClasses/${user.email}`, {
      headers: {
        authorization: `bearer ${token}`
      }
    })
    return res.json();
  })



  // deny classes functionality
  const handleDenied = id => {
    fetch(`http://localhost:5000/manageClass/deny/${id}`, {
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
            title: 'Class Denied Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
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
                classes && classes.map(course => <tr key={course._id}>
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
                    <button className={`btn  btn-xs text-white bg-red-500 rounded-full`} onClick={() => handleApproved(course._id)}><AiOutlineDelete size={22} /> </button>

                  </td>
                  <td>
                    <button className={`btn btn-sm text-white bg-red-500 rounded-full`} onClick={() => handleApproved(course._id)}><GiPayMoney size={20} /> Pay Now</button>

                  </td>
              


                </tr>)
              }

            </tbody>


          </table>
        </div>
      </div>

    </div>
  )
}

export default SelectedClass