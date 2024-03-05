import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../documentation/shared/header/Header';
import Footer from '../../documentation/shared/footer/Footer';
import Navbar from '../../documentation/shared/navbar/Navbar';
import ChatWidget from '../../documentation/chatWidget/ChatWidget';
import '../../documentation/chatWidget/ChatWidget.css';

const Main = () => {
    return (
        <div className=''>
            <div className='relative w-full'>
                <div className=''>
                    <div className='w-full'>
                        <div className='container h-20'><Header /></div>
                        <div className='flex w-full min-h-screen'>
                            <div className='navbarWidth hidden lg:flex bg-base-100 mt-2'>
                                <Navbar />
                            </div>
                            <div className='outletWidth lg:mx-auto min-h-screen lg:px-1'>
                                <Outlet />
                            </div>
                        </div>
                        <div className='absolute'><ChatWidget /></div>
                    </div>
                </div>
            </div>
            <div className='w-full'><Footer /></div>
        </div>
    );
};

export default Main;