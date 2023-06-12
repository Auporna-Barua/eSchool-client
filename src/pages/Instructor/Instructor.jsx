import React from 'react'
import InstructorComponent from '../../components/instructorComponent/InstructorComponent'

function Instructor() {
  return (
      <div>
          <div className=' w-10/12 mx-auto text-center my-10'>

              <h4 className='text-xl text-[#FF7703] font-bold'>Our Instructors</h4>
              <h2 className='text-4xl font-bold text-gray-500'>All Instructors</h2>
          </div>
          <div className=' w-11/12 md:w-10/12 mx-auto grid-item my-10'>
              <InstructorComponent page />
              <InstructorComponent page />
              <InstructorComponent page />
              <InstructorComponent page />
              <InstructorComponent page />
              <InstructorComponent page />
              <InstructorComponent page />
              <InstructorComponent page />
              <InstructorComponent page />
              <InstructorComponent page />
              <InstructorComponent page />
              <InstructorComponent page />
              <InstructorComponent page />


          </div>

      </div>
  )
}

export default Instructor