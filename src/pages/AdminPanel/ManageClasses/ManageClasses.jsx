import { useQuery } from '@tanstack/react-query';
import React, { useContext, useRef } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';
import Tittle from '../../../components/metaTitle/Title';
import { useForm } from 'react-hook-form';

function ManageClass() {
  const token = localStorage.getItem('access-token');
  const { user } = useContext(AuthContext);

  const { data: classes = [], refetch } = useQuery(['classes'], async () => {
    const res = await fetch(`http://localhost:5000/myClasses/${user.email}`, {
      headers: {
        authorization: `bearer ${token}`
      }
    })
    return res.json();
  })
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    reset()
  };
  // approved classes functionality
  const handleApproved = id => {
    fetch(`http://localhost:5000/manageClass/approved/${id}`, {
      method: 'PATCH',
      headers: {
        authorization: `bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
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
  return (
    <div>
      <Tittle heading={"All Created Classes"} />
      <div className=''>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>

                <th>Class Name</th>
                <th>Instructor</th>
                <th>Status</th>
                <th>Available seats</th>
                <th>Price</th>

                <th>Action</th>
                <th>Send Feedback</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                classes && classes.map(course => <>   <tr>
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
                  <td className='font-bold capitalize'>{course?.status}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs font-bold">{course?.seats}</button>
                  </th>
                  <td className='text-md font-bold'>{course?.price}৳</td>

                  <td><div className="btn-group gap-2">
                    <button className="btn btn-primary btn-xs text-white" onClick={() => handleApproved(course._id)}>Approve</button>
                    <button className="btn btn-xs bg-[#FF7703] text-white">Deny</button>
                  </div>
                  </td>
                  <td><div className="btn-group gap-2">

                    <button className="btn btn-primary text-white btn-xs " onClick={() => window.my_modal_3.showModal()}>send feedback</button>
                  </div>
                    <dialog id="my_modal_3" className="modal">
                      <form method="dialog" className="modal-box" onSubmit={handleSubmit(onSubmit)}>

                        <p className='text-left text-red-500'>
                          {errors.message?.type === 'required' && <span>{errors.message.message}</span>}
                        </p>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-base">Explain feedback*</span>
                          </label>
                          <textarea className="textarea textarea-primary h-32" placeholder="Please explain feedback..." {...register("message", {
                            required: {
                              value: true,
                              message: 'Write Some Feedback*'
                            }
                          })}></textarea>

                        </div>
                        <button className="btn btn-primary uppercase mt-5 text-white" type='submit'>Send feedback </button>
                      </form>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </td>


                </tr></>)
              }





            </tbody>


          </table>
        </div>
      </div>

    </div>
  )
}

export default ManageClass