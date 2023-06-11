import React from 'react';
import logo from '../../../public/logo.png'
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-[#FF7703] text-base-content">
                <div className='flex'>
                    <img className='w-28 h-28' src={logo} alt="" />
                    <div>
                        <p className='font-bold text-2xl text-white'>Music School<br /><span className='text-sm font-medium'>Providing reliable tech since 2022</span></p>
                        <div className='mt-3 flex space-x-4'>
                            <FaFacebook className='w-7 h-7'></FaFacebook>
                            <FaYoutube className='w-7 h-7'></FaYoutube>
                            <FaTwitter className='w-7 h-7'></FaTwitter>
                        </div>
                    </div>

                </div>
                <div>
                    <span className="text-lg text-yellow-300 font-bold">Services</span>
                    <a className="link link-hover font-medium text-white">Branding</a>
                    <a className="link link-hover font-medium text-white">Design</a>
                    <a className="link link-hover font-medium text-white">Marketing</a>
                    <a className="link link-hover font-medium text-white">Advertisement</a>
                </div>
                <div>
                    <span className="text-lg text-yellow-300 font-bold">Company</span>
                    <a className="link link-hover font-medium text-white">About us</a>
                    <a className="link link-hover font-medium text-white">Contact</a>
                    <a className="link link-hover font-medium text-white">Jobs</a>
                    <a className="link link-hover font-medium text-white">Press kit</a>
                </div>
                <div>
                    <span className="text-lg text-yellow-300 font-bold">Legal</span>
                    <a className="link link-hover font-medium text-white">Terms of use</a>
                    <a className="link link-hover font-medium text-white">Privacy policy</a>
                    <a className="link link-hover font-medium text-white">Cookie policy</a>
                    <p className='mt-2 border-s-4 border-yellow-300 bg-transparent p-2 font-bold text-white hover:bg-yellow-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 hover:rounded-md'>Call Us: <span>+880-190-888-888</span> </p>
                </div>

            </footer>
            <footer className="footer items-center p-4 bg-black text-neutral-content">
                <div className="mx-auto ">
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
            </footer>
        </>

    );
};

export default Footer;