import React, { useContext, useRef, useState } from 'react';
import Swal from 'sweetalert2';

import { useForm } from 'react-hook-form';
import Tittle from '../../../components/metaTitle/Title';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const EditClass = () => {
    const { user } = useContext(AuthContext);
    const classDetails = useLoaderData();
    const [classDetail, setClassDetail] = useState(classDetails)

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const form = useRef();
    const token = localStorage.getItem('access-token');
    const handleChange = (text, input) => {
        setClassDetail((prevState) => ({ ...prevState, [input]: text }));
    }
    const onSubmit = async (data) => {
        const allData = { name: classDetail.name, instructor: classDetail.instructor, photo: classDetail.photo, seats: classDetail.seats, price: classDetail.price, email: classDetail.email }
        fetch(`http://localhost:5000/editClass/${classDetail?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${token}`

            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Edit Class successful',
                    })

                    reset();

                };
            })

    };
    return (
        <div className=''>
            <Tittle heading={'Edit Music Class'} />

            {/* Contact Form */}
            <div
                className="hero min-h-screen min-w-screen flex flex-col-reverse px-2 md:px-0  lg:flex-row-reverse mx-auto justify-center items-center gap-5 my-16">

                <div
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    className="card flex-shrink-0 w-full lg:w-5/6 max-w-lg shadow-2xl ">
                    <form className='p-0 flex-row' ref={form} onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <p className='text-left text-red-500'>
                                {errors.name?.type === 'required' && <span>{errors.name.message}</span>}
                            </p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Class name*</span>
                                </label>
                                <input type="text" placeholder="Enter Class name" className="input input-bordered input-primary" value={classDetail.name} {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Class name is required*'
                                    },
                                    onChange: (e) => handleChange(e.target.value, "name")
                                })} />
                            </div>
                            <p className=' text-red-500'>
                                {errors.name?.type === 'required' && <span>{errors.name.message}</span>}
                            </p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Photo URL*</span>
                                </label>
                                <input type="text" value={classDetail.photo} placeholder="Enter photo url" className="input input-bordered input-primary" {...register("photo", {
                                    required: {
                                        value: true,
                                        message: 'Class photo URL is required*'
                                    },
                                    onChange: (e) => handleChange(e.target.value, "photo")

                                })} />
                            </div>
                            <p className=' text-red-500'>
                                {errors.photo?.type === 'required' && <span>{errors.photo.message}</span>}
                            </p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Instructor name*</span>
                                </label>
                                <input type="text" value={classDetail.instructor} disabled placeholder="Enter Instructor name" className="input input-bordered input-primary" {...register("instructor", {
                                    onChange: (e) => handleChange(e.target.value, "instructor")
                                })} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Email*</span>
                                </label>
                                <input type="email" value={user.email} disabled placeholder="Enter Email" className="input input-bordered input-primary" {...register("email")} />

                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Number of Seats*</span>
                                </label>
                                <input type="number" value={classDetail.seats} onChange={(text) => handleChange(text, "seats")} placeholder="Enter available seats number" className="input input-bordered input-primary" {...register("seats", {
                                    required: {
                                        value: true,
                                        message: 'Seats number is required*'
                                    },
                                    onChange: (e) => handleChange(e.target.value, "seats")

                                })} />
                            </div>
                            <p className=' text-red-500'>
                                {errors.seats?.type === 'required' && <span>{errors.seats.message}</span>}
                            </p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Price*</span>
                                </label>
                                <input type="number" value={classDetail.price} placeholder="Enter available seats number" className="input input-bordered input-primary" {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is required*'
                                    },
                                    onChange: (e) => handleChange(e.target.value, "price")

                                })} />
                            </div>
                            <p className=' text-red-500'>
                                {errors.price?.type === 'required' && <span>{errors.price.message}</span>}
                            </p>
                            <div
                                data-aos="flip-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                className="form-control mt-6">
                                <button className="btn bg-[#FF7703] text-white hover:bg-[#FF7703] uppercase" type='submit'>Update Save </button>
                            </div>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default EditClass;