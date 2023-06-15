import React, { useEffect, useState } from 'react'
import ClassComponent from '../../../components/ClassComponent/ClassComponent'
import "../../../App.css"
import axios from 'axios';

function Classes() {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        axios.get(`https://e-school-mu.vercel.app/approveClasses`)
            .then(function (response) {

                setClasses(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])
    return (
        <div>
            <div className=' w-10/12 mx-auto text-center my-10'>

                <h4 className='text-xl text-[#FF7703] font-bold'>Our Classes</h4>
                <h2 className='text-4xl font-bold text-gray-500'>Most Popular Classes</h2>
            </div>
            <div className=' w-11/12 md:w-10/12 mx-auto grid-item my-10'>
                {
                    classes && classes.slice(0,6).map(course => <ClassComponent key={course._id} course={course} />)
                }

            </div>

        </div>
    )
}

export default Classes