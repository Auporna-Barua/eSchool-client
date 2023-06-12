import React from 'react'
import Class from '../../components/Classes/Class'

function Classes() {
    return (
        <div>
            <div className=' w-10/12 mx-auto text-center my-10'>

                <h4 className='text-xl text-[#FF7703] font-bold'>Our Classes</h4>
                <h2 className='text-4xl font-bold text-gray-500'>Most Popular Classes</h2>
            </div>
            <div className=' w-11/12 md:w-10/12 mx-auto grid-item my-10'>

<Class />

            </div>

        </div>
    )
}

export default Classes