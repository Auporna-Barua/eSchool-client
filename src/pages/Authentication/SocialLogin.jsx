import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';


const SocialLogin = () => {
    const { createGoogleUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const handleGoogleLogin = () => {
        createGoogleUser()
            .then(result => {
                const loggedInUser = result.user;

                const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email }

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate(from, { replace: true });

                    })



            })
            .catch(error => {
                console.log(error);
            })
    };
    return (
        <div className='mt-4 flex justify-center'>
            <button onClick={handleGoogleLogin} className='btn btn-outline hover:bg-transparent hover:text-white hover:border-[#FF7703] hover:border-2 border-[#FF7703] border-2 hover:bg-[#FF7703] duration-300 w-full font-bold text-base'>logIn with <FaGoogle className='w-5 h-5'></FaGoogle></button>
        </div>
    );
};

export default SocialLogin;