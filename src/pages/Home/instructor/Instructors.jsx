import React from 'react'
import "../../../App.css"
import InstructorComponent from '../../../components/instructorComponent/InstructorComponent'
function Instructors() {
    const classes = [
        {
            class_name: "Yoga for Beginners",
            instructor_name: "Sarah Thompson",
            class_length: "1 hour",
            class_image: "yoga.jpg",
            number_of_students: 15
        },
        {
            "class_name": "Introduction to Programming",
            "instructor_name": "John Smith",
            "class_length": "2 hours",
            "class_image": "programming.jpg",
            "number_of_students": 25
        },
        {
            "class_name": "Digital Photography 101",
            "instructor_name": "Emily Johnson",
            "class_length": "1.5 hours",
            "class_image": "photography.jpg",
            "number_of_students": 12
        },
        {
            "class_name": "Spanish Conversation",
            "instructor_name": "Carlos Rodriguez",
            "class_length": "1.5 hours",
            "class_image": "spanish.jpg",
            "number_of_students": 18
        },
        {
            "class_name": "Introduction to Finance",
            "instructor_name": "Michael Anderson",
            "class_length": "2 hours",
            "class_image": "finance.jpg",
            "number_of_students": 20
        },
        {
            "class_name": "Cooking Masterclass",
            "instructor_name": "Chef Julia Baker",
            "class_length": "2.5 hours",
            "class_image": "cooking.jpg",
            "number_of_students": 10
        }
    ]
    return (
        <div>
            <div className=' w-10/12 mx-auto text-center my-10'>

                <h4 className='text-xl text-[#FF7703] font-bold'>Our Instructors</h4>
                <h2 className='text-4xl font-bold text-gray-500'>Meet Popular Instructors</h2>
            </div>
            <div className=' w-11/12 md:w-10/12 mx-auto grid-item my-10'>
                <InstructorComponent />
                <InstructorComponent />
                <InstructorComponent />
                <InstructorComponent />
                <InstructorComponent />
                <InstructorComponent />


            </div>

        </div>
    )
}

export default Instructors