import React from 'react';
import Navbar from '../Component/Common/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Common/Footer';

const Mainlayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Mainlayout;