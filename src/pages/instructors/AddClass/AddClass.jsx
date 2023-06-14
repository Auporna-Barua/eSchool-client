import React, { useContext, useRef } from 'react';
import Swal from 'sweetalert2';

import { useForm } from 'react-hook-form';
import Tittle from '../../../components/metaTitle/Title';
import { AuthContext } from '../../../Provider/AuthProvider';

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const form = useRef();
  const token = localStorage.getItem('access-token');

  const onSubmit = async (data) => {
    const allData = { ...data, instructor: user.displayName, email: user.email, status: "pending" }
    fetch('https://e-school-mu.vercel.app/addClass', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${token}`

      },
      body: JSON.stringify(allData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            text: 'Add new Class successful',
          })

          reset();

        };
      })

  };
  return (
    <div className=''>
      <Tittle heading={'Add New Music Class'} />

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
                <input type="text" placeholder="Enter Class name" className="input input-bordered input-primary" {...register("name", {
                  required: {
                    value: true,
                    message: 'Class name is required*'
                  }
                })} />
              </div>
              <p className=' text-red-500'>
                {errors.name?.type === 'required' && <span>{errors.name.message}</span>}
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Photo URL*</span>
                </label>
                <input type="text" placeholder="Enter photo url" className="input input-bordered input-primary" {...register("photo", {
                  required: {
                    value: true,
                    message: 'Class photo URL is required*'
                  }
                })} />
              </div>
              <p className=' text-red-500'>
                {errors.photo?.type === 'required' && <span>{errors.photo.message}</span>}
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Instructor name*</span>
                </label>
                <input type="text" value={user.displayName} disabled placeholder="Enter Instructor name" className="input input-bordered input-primary" {...register("instructor")} />
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
                <input type="number" placeholder="Enter available seats number" className="input input-bordered input-primary" {...register("seats", {
                  required: {
                    value: true,
                    message: 'Seats number is required*'
                  }
                })} />
              </div>
              <p className=' text-red-500'>
                {errors.seats?.type === 'required' && <span>{errors.seats.message}</span>}
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Price*</span>
                </label>
                <input type="number" placeholder="Enter available seats number" className="input input-bordered input-primary" {...register("price", {
                  required: {
                    value: true,
                    message: 'Price is required*'
                  }
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
                <button className="btn bg-[#FF7703] text-white hover:bg-[#FF7703] uppercase" type='submit'>Add New Music Class </button>
              </div>
            </div>
          </form>
        </div>


      </div>
    </div>
  );
};

export default AddClass;