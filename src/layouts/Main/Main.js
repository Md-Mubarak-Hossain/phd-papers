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
        <div className='relative'>
            {/* <Carocel /> */}
            <div className='w-full '>
                <div className='container mx-0'>
                    <div className='mx-0 container h-20'><Header /></div>
                    <div className='flex'>
                        <div><Navbar /></div>
                        <div className='mx-auto overflow-y-auto min-h-screen'><Outlet /></div>
                    </div>
                    <div className='absolute'><ChatWidget /></div>
                </div>
            </div>
            <div><Footer /></div>
        </div>
    );
};

export default Main;