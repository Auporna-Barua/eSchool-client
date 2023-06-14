import React, { useEffect, useState } from 'react'
import InstructorComponent from '../../components/instructorComponent/InstructorComponent'
import axios from 'axios';

function Instructor() {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        axios.get(`https://e-school-mu.vercel.app/instructors`)
            .then(function (response) {
                setInstructors(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);
    console.log("instructor", instructors);
    return (
        <div>
            <div className=' w-10/12 mx-auto text-center my-10'>

                <h4 className='text-xl text-[#FF7703] font-bold'>Our Instructors</h4>
                <h2 className='text-4xl font-bold text-gray-500'>All Instructors</h2>
            </div>
            <div className=' w-11/12 md:w-10/12 mx-auto grid-item my-10'>
                {
                    instructors && instructors.map(instructor => <InstructorComponent page key={instructor._id} instructor={instructor} />)
                }




            </div>

        </div>
    )
}

export default Instructor