import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png'
import { FaUsersCog, FaUserShield, FaUser, FaUserGraduate, FaBook, FaBookReader, FaSwatchbook, FaBookMedical, FaBookOpen, FaHome, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import { AiOutlineBars } from 'react-icons/ai';

const DashboardLayout = () => {

    // const isAdmin = true;
    const isInstructor = false;
    // TODO Admin is not dynamic
    const isAdmin = useAdmin();
    console.log("isAdmin", isAdmin[1]);
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ms-10 mt-4">
                <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden"><AiOutlineBars size={22} /></label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#FF7703] text-base-content">
                    {/* Sidebar content here */}
                    <div className='flex flex-col items-center border-b-2 pb-2 border-white  w-full mx-auto mb-5'>
                        <img className='w-40 h-20' src={logo} alt="" />
                        <p className='font-bold text-xl text-white'>Musicy Mystery</p>
                    </div>


                    {isAdmin[1] == "admin" && (
                        <div className='space-y-3'>
                            <li><NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-white bg-yellow-300 text-lg duration-300 font-bold hover:bg-white' : 'font-bold text-base   hover:bg-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5 text-white hover:text-white')}><FaUserShield className='w-5 h-5'></FaUserShield> Admin Home</NavLink></li>

                            <li><NavLink to={'/dashboard/manageClass'} className={({ isActive }) => (isActive ? 'text-text text-lg duration-300 font-bold ' : 'font-bold text-white  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaBook className='w-5 h-5'></FaBook> Manage Classes</NavLink></li>

                            <li><NavLink to={'/dashboard/allUsers'} className={({ isActive }) => (isActive ? 'text-white text-lg duration-300 font-bold ' : 'font-bold text-white  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaUsersCog className='w-5 h-5'></FaUsersCog> Manage Users</NavLink></li>
                        </div>
                    )}

                    {isAdmin[1] == "musician" && (
                        <div className='space-y-3'>
                            <li><NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-white text-lg duration-300 font-bold ' : 'font-bold text-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaUserGraduate className='w-5 h-5'></FaUserGraduate>Musician Home</NavLink></li>

                            <li><NavLink to={'/dashboard/addClass'} className={({ isActive }) => (isActive ? 'text-white  text-lg duration-300 font-bold ' : 'font-bold text-white   transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaBookMedical className='w-5 h-5'></FaBookMedical>Add a Class</NavLink></li>

                            <li><NavLink to={'/dashboard/myClass'} className={({ isActive }) => (isActive ? 'text-white  text-lg duration-300 font-bold hover:bg-yellow-300' : 'font-bold text-white  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaSwatchbook className='w-5 h-5'></FaSwatchbook>My Classes</NavLink></li>
                        </div>
                    )}

                    {(isAdmin[1] == "student" || isAdmin[1] == undefined) && (
                        <div className='space-y-3'>
                            <li><NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-white  text-lg duration-300 font-bold ' : 'font-bold text-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaUser className='w-5 h-5'></FaUser> Student Home</NavLink></li>

                            <li><NavLink to={'/dashboard/selectedclass'} className={({ isActive }) => (isActive ? 'text-white  text-lg duration-300 font-bold ' : 'font-bold text-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaBookOpen className='w-5 h-5'></FaBookOpen> My Selected Classes</NavLink></li>

                            <li><NavLink to={'/dashboard/enrolledClass'} className={({ isActive }) => (isActive ? 'text-white  text-lg duration-300 font-bold ' : 'font-bold text-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaBookReader className='w-5 h-5'></FaBookReader>My Enrolled Classes</NavLink></li> 
                            <li><NavLink to={'/dashboard/history'} className={({ isActive }) => (isActive ? 'text-white  text-lg duration-300 font-bold ' : 'font-bold text-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 me-5')}><FaBookReader className='w-5 h-5'></FaBookReader>My Payment history</NavLink></li>
                        </div>
                    )}



                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;