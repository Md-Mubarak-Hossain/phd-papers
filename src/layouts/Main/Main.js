'use client';

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../documentation/shared/header/Header';
import Footer from '../../documentation/shared/footer/Footer';
import Navbar from '../../documentation/shared/navbar/Navbar';
import ChatWidget from '../../documentation/chatWidget/ChatWidget';
import '../../documentation/chatWidget/ChatWidget.css';
// import Carocel from '../../documentation/carocel/Carocel';

const Main = () => {
    return (
        <div className='relative w-full'>
            {/* <Carocel /> */}
            <div className=''>
                <div className='w-full'>
                    <div className='container h-20'><Header /></div>
                    <div className='flex'>
                        <div className='w-60 hidden lg:flex'><Navbar /></div>
                        <div className='w-full lg:ms-auto overflow-y-auto min-h-screen '><Outlet /></div>
                    </div>
                    <div className='absolute'><ChatWidget /></div>
                </div>
            </div >
            <div className='w-full px-5'><Footer /></div>
        </div >
    );
};

export default Main;