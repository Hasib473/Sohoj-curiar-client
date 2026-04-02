import React from 'react';
import logoimg from '../assets/sohojcourier logo.png';
import leftimg from '../assets/Authimg.png';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div>
                <img className='w-auto h-20' src={logoimg} alt="Logo" />
            </div>

            {/* Grid instead of flex */}
            <div className='grid grid-cols-6  mt-5 items-center'>
                
                {/* Outlet side */}
                <div className='col-span-3 pl-30'>
                    <Outlet />
                </div>

                {/* Image side */}
                <div className='col-span-3'>
                    <img className='w-full h-auto' src={leftimg} alt="Auth" />
                </div>

            </div>
        </div>
    );
};

export default AuthLayout;