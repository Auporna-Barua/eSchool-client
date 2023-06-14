import { useQuery } from '@tanstack/react-query';
import React, { useContext, useRef, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';
import Tittle from '../../../components/metaTitle/Title';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function ManageClass() {
  const token = localStorage.getItem('access-token');
  const [id, setId] = useState("");
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true)
  const { user } = useContext(AuthContext);
  const { data: classes = [], refetch } = useQuery(['classes'], async () => {
    const res = await fetch(`https://e-school-mu.vercel.app/allClasses`, {
      headers: {
        authorization: `bearer ${token}`
      }
    })
    return res.json();
  })
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    fetch(`https://e-school-mu.vercel.app/manageClass/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${token}`

      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: 'success',
            text: 'Add new feedback successful',
          })

          reset();

        };
      })

  };

  // approved classes functionality
  const handleApproved = id => {
    fetch(`https://e-school-mu.vercel.app/manageClass/approved/${id}`, {
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
            title: 'Class Approved Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }
  // deny classes functionality
  const handleDenied = id => {
    fetch(`https://e-school-mu.vercel.app/manageClass/deny/${id}`, {
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
                  <td className='font-bold capitalize'>{course?.status}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs font-bold">{course?.seats}</button>
                  </th>
                  <td className='text-md font-bold'>{course?.price}৳</td>

                  <td><div className="btn-group gap-2">
                    <button className={`btn btn-primary btn-xs text-white   ${(course.status == "approved" || course.status == "denied") && "cursor-not-allowed pointer-events-none	 opacity-30"}`} onClick={() => handleApproved(course._id)}>Approve</button>

                    <button className={`btn btn-xs bg-[#FF7703] text-white ${(course.status == "approved" || course.status == "denied") && "cursor-not-allowed pointer-events-none	 opacity-30"}`} onClick={() => handleDenied(course._id)}>Deny</button>
                  </div>
                  </td>
                  <td>
                    <div className="btn-group gap-2">
                      <button className="btn btn-primary text-white btn-xs " onClick={() => {
                        setId(course._id)
                        setOpen(true)
                      }}>send feedback</button>
                    </div>
                    <div id="my_modal_2" className="modal opa">
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
                        <button className="btn bg-[#FF7703] hover:bg-[#FF7703] uppercase mt-5 text-white" type='submit'>Send feedback </button>
                      </form>
                      <form method="dialog" className="modal-backdrop">
                        <button onClick={() => setId("")}>close</button>
                      </form>
                    </div>
                  </td>
                  {/* Open the modal using ID.showModal() method */}



                </tr>)
              }

            </tbody>


          </table>
        </div>
      </div>

    </div>
  )
}

export default ManageClass