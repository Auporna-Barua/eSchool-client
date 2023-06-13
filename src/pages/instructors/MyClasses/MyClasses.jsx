import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider';
import Tittle from '../../../components/metaTitle/Title';
import { FaRegEdit } from 'react-icons/fa';
import { Link, useNavigation } from 'react-router-dom';

function MyClasses() {
  const token = localStorage.getItem('access-token');
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();

  const { data: classes = [], refetch } = useQuery(['classes'], async () => {
    const res = await fetch(`http://localhost:5000/myClasses/${user.email}`, {
      headers: {
        authorization: `bearer ${token}`
      }
    })
    return res.json();
  })
  const handleClassEdit = async (id) => {
    console.log("hi", id);
    navigation(`/dashboard/editClass/${id}`)
  }
  return (
    <div>
      <Tittle heading={"My All Classes"} />
      <div className=''>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>

                <th>Class Name</th>
                <th>Instructor</th>
                <th>Status</th>
                <th>Enrolled</th>
                <th>Feedback</th>
                <th>Edit</th>
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
                  <td>{course?.status}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">{course?.enroll ? course?.enroll : "0"}</button>
                  </th>
                  <td>{course?.feedBack ? <div className="tooltip tooltip-left " data-tip={course.feedBack}>
                    <button className="btn bg-[#FF7703] text-white">Feedback</button>
                  </div> : "No FeedBack"}  </td>
                  <td>
                    <Link to={`/dashboard/editClass/${course._id}`}>
                      <button onClick={() => handleClassEdit(course._id)} className='p-2 hover:bg-[#FF7703] hover:text-white hover:rounded-full duration-500 w-fit'><FaRegEdit className='w-5 h-5 '></FaRegEdit></button>
                    </Link>
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

export default MyClasses